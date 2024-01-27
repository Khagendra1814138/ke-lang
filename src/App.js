import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import NavigationBar from './Components/NavigationBar/NavigationBar';
import { BackToTopButton } from './Components/BackToTopBtn/backToTopBtn';
import { ScrollIndicator } from './Components/Scrollindicator/Scrollindicator';

import { HomePage } from './Pages/Home/HomePage';
import { AboutPage } from './Pages/About/AboutPage';
import Paralax  from './Pages/Paralax/Paralax';
import ParalaxCss from './Pages/Paralax/ParalaxCss';
import ParallaxMouse from './Pages/Paralax/ParallaxMouse';

import { ChyabrungStepsPage } from './Pages/Steps/Steps';
import { HowItsPlayedPage } from './Pages/HowItsPlayed/HowItsPlayed';
import { BeatsPage } from './Pages/Beats/Beats';
import { OtherInstrumentsPage } from './Pages/OtherInstruments/Instruments';
import { HowItsMadePage } from './Pages/HowItsMade/HowItsMade';
import { ClothesAndAccessoriesPage } from './Pages/Dresses/Clothes';
import { WhenPerformedPage } from './Pages/WhenPerformed/WhenPerformed';
import { WhyImportantPage } from './Pages/WhyItsImportant/WhyImportant';
import { SilamSakmaPage } from './Pages/SilamSakma/SilamSakma';

import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <NavigationBar/>
          <BackToTopButton/>
          <ScrollIndicator/>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/AboutPage' element={<AboutPage/>} />
            <Route path='/Steps' element={<ChyabrungStepsPage/>} />
            <Route path='/HowItsPlayed' element={<HowItsPlayedPage/>} />
            <Route path='/Instruments' element={<OtherInstrumentsPage/>} />
            <Route path='/HowItsMade' element={<HowItsMadePage/>} />
            <Route path='/Clothes' element={<ClothesAndAccessoriesPage/>} />
            <Route path='/Beats' element={<BeatsPage/>} />
            <Route path='/WhenPerformed' element={<WhenPerformedPage/>} />
            <Route path='/WhyImportant' element={<WhyImportantPage/>} />
            <Route path='/SilamSakma' element={<SilamSakmaPage/>} />

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
