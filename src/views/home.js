import React, { useContext } from 'react';
import Logo from '../assets/logo.gif';
import ReactLogo from '../assets/reactLogo.png';
import ReactBootstrapLogo from '../assets/reactBootstrapLogo.png';
import ReactHooksLogo from '../assets/reactHooksLogo.png';
import ReactRouterLogo from '../assets/reactRouterLogo.png';
import SearchView from './search';
import GitContext from '../context/gitData/gitContext';
import { Container, Alert, Card, ListGroup } from 'react-bootstrap';
const Home = () => {
  const { valueInput } = useContext(GitContext);


  return (
    <Container style={{ display: 'grid', alignContent: 'center' }}>
      {!valueInput && <>
        <Alert><p>¡Este modulo aparece por defecto! <b style={{color:'red', cursor:'ponter'}}>para iniciar ingrese un nombre o letra en el buscador</b></p></Alert>
        <Card style={{ width: '18rem', justifySelf: 'center', alignSelf: 'center' }}>
          <Card.Img src={Logo} />
          <Card.Body>
            <Card.Title>Test AKimad</Card.Title>
            <Card.Text>
              <p>Autor: Nestor Barraza Otalvarez</p>
              <p>Tecnologías usadas:</p>              
              <ListGroup>
                <ListGroup.Item>  <Card.Img style={{width:'22px', marginRight:'10px', borderRadius:'50%'}} src={ReactLogo} />React js</ListGroup.Item>
                <ListGroup.Item>  <Card.Img style={{width:'22px', marginRight:'10px', borderRadius:'50%'}} src={ReactBootstrapLogo} />React-bootstrap</ListGroup.Item>
                <ListGroup.Item>  <Card.Img style={{width:'22px', marginRight:'10px', borderRadius:'50%'}} src={ReactRouterLogo} />React-Router</ListGroup.Item>
                <ListGroup.Item>  <Card.Img style={{width:'22px', marginRight:'10px', borderRadius:'50%'}} src={ReactHooksLogo} />React Hooks:</ListGroup.Item>
                <ListGroup.Item style={{marginLeft:10}}><Card.Img style={{width:'22px', marginRight:'10px', borderRadius:'50%'}} src={ReactHooksLogo} /> Reducer</ListGroup.Item>
                <ListGroup.Item style={{marginLeft:10}}><Card.Img style={{width:'22px', marginRight:'10px', borderRadius:'50%'}} src={ReactHooksLogo} /> API Context</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card></>}
      {valueInput && <SearchView />}
    </Container>
  );
}

export default Home;