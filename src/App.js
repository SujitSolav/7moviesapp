import React from 'react';
import './App.css';
import {Outlet} from  'react-router-dom';
import Navbar from './componants/Navbar';
import Footer from './componants/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/> 
    </>
  );  
}

export default App;
