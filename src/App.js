import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import NavigationBar from './Components/NavigationBar/NavigationBar';

import { HomePage } from './Pages/Home/HomePage';
import { AboutPage } from './Pages/About/AboutPage';
import  Paralax  from './Pages/Paralax/Paralax';
import ParalaxCss from './Pages/Paralax/ParalaxCss';
import ParallaxMouse from './Pages/Paralax/ParallaxMouse';

function App() {
  return (
    <div className="App">
        <Router>
          <NavigationBar/>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/AboutPage' element={<AboutPage/>} />

            <Route path='/Paralax' element={<Paralax/>} />
            <Route path='/ParalaxCss' element={<ParalaxCss/>} />
            <Route path='/ParallaxMouse' element={<ParallaxMouse/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
