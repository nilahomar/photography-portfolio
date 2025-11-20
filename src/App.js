import React from 'react';
//import components

import Header from './components/Header';
import AnimeRoutes from './components/AnimRoutes';
//import Router

import { BrowserRouter as Router } from 'react-router-dom';

//import motion
import {motion} from 'framer-motion';



const App = () => {
  return <div>
    <Router>
      <Header/>
      <AnimeRoutes/>
    </Router>
  </div>;
};

export default App;
