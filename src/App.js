import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Play from './pages/Play';
import Login from './pages/Login';
import Routerobj from './classes/Routerclass';

function App() {

  return (
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path='/'element={<Home/>} />
            <Route path='/play' element={<Play/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
      </Router>
  );
}

export default App;