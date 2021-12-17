import React, {useContext, useState} from 'react';
import { Navbar, Container, Form, Button } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import GitContext from '../context/gitData/gitContext';
import { useNavigate } from "react-router-dom";
 

const NavBar = () => {
  const {findUserByWord, verifyValue, valueInput} = useContext(GitContext);

  const[inputValue, setInputValue]= useState('')
  const navigate = useNavigate();
  return ( 
   
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => {navigate('/'); verifyValue('');}} href="#home">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        Akimad Test
        </Navbar.Brand>
        <Form.Control value={valueInput}  type="email" placeholder="name User" onChange={(e) => { setInputValue(e.target.value); verifyValue(e.target.value)}} />
        <Button variant="primary" disabled={!inputValue} onClick={() => {findUserByWord(inputValue); setInputValue(''); }} style={{marginLeft:5}}>Buscar</Button>
      </Container>
    </Navbar>
   );
}
 
export default NavBar;