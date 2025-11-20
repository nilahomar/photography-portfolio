import React from 'react';
//import pages

import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

//import routes,route and useLocation hook

import { Routes,Route,useLocation } from 'react-router-dom';

const AnimRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route/>
  </Routes>
};

export default AnimRoutes;
