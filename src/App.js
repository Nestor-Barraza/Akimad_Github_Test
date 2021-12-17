/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import UserView from './views/userDetails';
import Home from './views/home';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/userDetails' element={<UserView />} />
      </Routes>
    </div>
  );
}

export default App;
