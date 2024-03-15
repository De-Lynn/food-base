import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipePage from './components/RecipePage';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import './App.scss'

function App() {
  
  return (
    <BrowserRouter>
      {/* main page */}
      <div className='wrapper'>
        {/* header */}
        {/* <Header /> */}
        <div className='wrapper__navbar'>
          <NavBar />
        </div>
        {/* body */}
        <div className='wrapper__body '>
          <AppRouter />
        </div>

        {/* footer */}
        <div className='wrapper__footer'>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
