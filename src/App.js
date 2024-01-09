import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import NavigationBar from './Components/NavigationBar/NavigationBar';

import { HomePage } from './Pages/Home/HomePage';
import { AboutPage } from './Pages/About/AboutPage';
import Paralax  from './Pages/Paralax/Paralax';
import ParalaxCss from './Pages/Paralax/ParalaxCss';
import ParallaxMouse from './Pages/Paralax/ParallaxMouse';

import { ChyabrungStepsPage } from './Pages/Steps/Steps';
import { HowItsPlayedPage } from './Pages/HowItsPlayed/HowItsPlayed';
import { OtherInstrumentsPage } from './Pages/OtherInstruments/Instruments';
import { HowItsMadePage } from './Pages/HowItsMade/HowItsMade';
import { ClothesAndAccessoriesPage } from './Pages/Dresses/Clothes';
import { WhenPerformedPage } from './Pages/WhenPerformed/WhenPerformed';
import { WhyImportantPage } from './Pages/WhyItsImportant/WhyImportant';

import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <NavigationBar/>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/AboutPage' element={<AboutPage/>} />
            <Route path='/Steps' element={<ChyabrungStepsPage/>} />
            <Route path='/HowItsPlayed' element={<HowItsPlayedPage/>} />
            <Route path='/Instruments' element={<OtherInstrumentsPage/>} />
            <Route path='/HowItsMade' element={<HowItsMadePage/>} />
            <Route path='/Clothes' element={<ClothesAndAccessoriesPage/>} />
            <Route path='/WhenPerformed' element={<WhenPerformedPage/>} />
            <Route path='/WhyImportant' element={<WhyImportantPage/>} />

            <Route path='/Paralax' element={<Paralax/>} />
            <Route path='/ParalaxCss' element={<ParalaxCss/>} />
            <Route path='/ParallaxMouse' element={<ParallaxMouse/>} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
