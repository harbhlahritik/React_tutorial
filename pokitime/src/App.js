import React from 'react';
import Navbar from './Component/Navbar'
import {BrowserRouter, Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component = {Home}></Route>
        <Route path='/about' component = {About}></Route>
        <Route path='/contact' component = {Contact}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;