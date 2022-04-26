import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Play from './pages/Play';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Store from './Components/store';


function App() {

  return (
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path='/'element={<Home/>} />
            <Route path='/play' element={<Play/>} />
            <Route path='/register' element={<RegisterForm/>} />
            <Route path='/login' element={<LoginForm/>} />
            <Route path='/test' element={<Store/>} />
          </Routes>
      </Router>
  );
}

export default App;