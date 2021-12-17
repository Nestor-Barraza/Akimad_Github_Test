/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import GitContext from '../context/gitData/gitContext';
import { useNavigate } from "react-router-dom";
import { Card, Container, Alert, Spinner, OverlayTrigger, Button, Tooltip } from 'react-bootstrap';

const UserDetails = () => {
  const navigate = useNavigate();
  const { userDetails, valueInput, allOrgs } = useContext(GitContext);

  const [loading, setLoading] = useState(false)

  const timerLoading = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)

  };
  useEffect(() => {
    timerLoading()
  }, [])

  if (valueInput) { navigate('/') }
  if (!userDetails || loading) return (
    <Alert>
      <div>Cargando <Spinner animation="grow" size="sm" /> </div>
    </Alert>)
  return (
    <Container style={{ display: 'grid', paddingTop: 70 }}>
      <Card border="secondary" style={{ width: '18rem', justifySelf: 'center' }}>
        <Card.Img variant="top" src={userDetails.avatar_url} />
        <Card.Body>
          <Card.Title>Nombre: {userDetails.name}</Card.Title>
          <Card.Text><b style={{ color: '#1E47C5' }}>Bio:</b> {userDetails.bio}</Card.Text>
          <Card.Text><b style={{ color: '#1E47C5' }}>Seguidores:</b> {userDetails.followers ? userDetails.followers : 'N/A'} </Card.Text>
          <Card.Text><b style={{ color: '#1E47C5' }}>Siguiendo:</b> {userDetails.following ? userDetails.following : 'N/A'} </Card.Text>
          <Card.Text><b style={{ color: '#1E47C5' }}>Repositorios Públicos</b> {userDetails.public_repos ? userDetails.public_repos : 'N/A'}</Card.Text>
          <Card.Text><b style={{ color: '#1E47C5' }}>{userDetails.email}</b></Card.Text>
          <Card.Link> <b style={{ color: '#1E47C5', marginRight: 10 }}>Orgs:</b></Card.Link>
          {allOrgs.map((item, key) => (
            <OverlayTrigger key={key} overlay={<Tooltip id="tooltip-disabled">{item.login}</Tooltip>}>
              <span className="d-inline-block">
                {allOrgs && <>
                  <Card.Img style={{ width: 20, marginLeft: 5, cursor:'pointer' }} src={item.avatar_url} />
                </>}
              </span>
            </OverlayTrigger>))}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserDetails;