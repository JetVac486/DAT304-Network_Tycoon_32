import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Play from './pages/Play';
import Register from './pages/Register';
import Login from './pages/Login';
import LoginForm from './Components/LoginForm';

function App() {

  return (
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path='/'element={<Home/>} />
            <Route path='/play' element={<Play/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<LoginForm/>} />
          </Routes>
      </Router>
  );
}

export default App;