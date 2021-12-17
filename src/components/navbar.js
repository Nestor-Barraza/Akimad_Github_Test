import React, {useContext} from 'react';
import { Navbar, Container, Form } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import GitContext from '../context/gitData/gitContext';
import { useNavigate } from "react-router-dom";
 

const NavBar = () => {
  const {findUserByWord, verifyValue, valueInput} = useContext(GitContext);

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
        <Form.Control value={valueInput}  type="email" placeholder="name User" onChange={(e) => {findUserByWord(e.target.value); verifyValue(e.target.value)}} />
      </Container>
    </Navbar>
   );
}
 
export default NavBar;