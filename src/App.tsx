import React from 'react';

import './App.css';
import {Routes, Route} from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Favorite from './pages/favorite/Favorite';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="" element = {<Home/>}></Route>
        <Route path = "/list" element = {<List/>}></Route>
        <Route path = "/favorite" element = {<Favorite/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
