import React, { useReducer } from 'react';
import GitReducer from './gitReducer';
import GitContext from './gitContext';
import { fetchData } from '../../client'

const UserState = (props) => {
  const initialState = {
    users: [],
    userDetails: [],
    allOrgs: [],
    valueInput: ''
  }

  const [state, dispatch] = useReducer(GitReducer, initialState)


  const findUserByWord = async (word) => {
    if (word !== '') {
      try {
        const data = await fetchData(`/search/users?q=${word}`);
        dispatch({
          type: 'FIND_USERS_BY_WORD',
          payload: data.items
        })
      } catch (error) { console.log(error) }

    } 
  }

  const getUserDetails = async (userName) => {   
      try {
        const dataUser = await fetchData(`/users/${userName}`);
        dispatch({
          type: 'GET_USER',
          payload: dataUser
        })
        if(dataUser.organizations_url)
        {
        const findOrgs = await  dataUser.organizations_url.replace('https://api.github.com', '')
        const dataOrgs = await fetchData(findOrgs);
        dispatch({
          type: 'ORGS_INFO',
          payload: dataOrgs
        })}
      } catch (error) { console.log(error) }

  }
  const verifyValue = (value) => {  
        dispatch({
          type: 'UPDATE_VALUE_INPUT',
          payload: value
        })    
    }


  return (
    <GitContext.Provider value={{
      users: state.users,
      userDetails: state.userDetails,
      valueInput: state.valueInput,
      allOrgs: state.allOrgs,
      findUserByWord,
      getUserDetails,
      verifyValue
    }}>
      {props.children}
    </GitContext.Provider>
  )

}

export default UserState;