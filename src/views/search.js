import React, { useContext } from 'react';
import { Table, Alert, Spinner } from 'react-bootstrap';
import GitContext from '../context/gitData/gitContext';
import { useNavigate } from "react-router-dom";

const SearchView = () => {
  const { users, getUserDetails, verifyValue } = useContext(GitContext);
  const navigate = useNavigate();

  if (!users) return (
    <Alert>
      <div>Buscando <Spinner animation="grow" size="sm" /> </div>
    </Alert>)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th >Name</th>
          <th>ID</th>
          <th>Type</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, key) => (
          <tr onClick={() => { getUserDetails(item.login); navigate('/userDetails'); verifyValue('') }} style={{ cursor: "pointer" }} key={key}>
            <td>1</td>
            <td>{item.login}</td>
            <td>{item.node_id}</td>
            <td>{item.type}</td>
            <td>{item.url}</td>
          </tr>))}
      </tbody>
    </Table>
  );
}

export default SearchView;