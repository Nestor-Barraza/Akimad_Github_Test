import { GET_USER, ORGS_INFO, FIND_USERS_BY_WORD, UPDATE_VALUE_INPUT } from '../types';


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        userDetails: payload
      }
    case ORGS_INFO:
      return {
        ...state,
        allOrgs: payload
      }
    case FIND_USERS_BY_WORD:
      return {
        ...state,
        users: payload
      }
    case UPDATE_VALUE_INPUT:
      return {
        ...state,
        valueInput: payload
      }
    default:
      return state;
  }
}