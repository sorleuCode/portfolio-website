import React, { useState } from 'react'
import "./index.css";
import Header from './Components/Header'
import Main from './Components/Main';
import SocialLinks from './Components/SocialLinks';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


const App = () => {

  return (
    <div className='m-auto px-5 md:px-10 sm:px-4 lg:px-14 py-3  text-gray-300 bg-gray-900'>
     <Header/>
     <Main/>
     
     <SocialLinks />
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Footer/>
    </div>
  )
}
export default App
