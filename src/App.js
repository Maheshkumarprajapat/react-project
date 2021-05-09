import React from 'react';
import "./App.css";
import Header from './Reactrouter/Header';
import Services from './components/Services';
import About from './Reactrouter/About';
import Blog from './Reactrouter/Blog';
import Home from './Reactrouter/Home';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <>

     <Router>
     <Route path='/'>
      <Header/>
      </Route>

      <Route exact path="/">
      <Home/>
      </Route>

      <Route path='/about'>
      <About/>
      </Route>

      <Route path='/blog'>
      <Blog/>
      </Route>

      <Route path='/services'>
      <Services/>
      </Route>
     </Router>
      
    </>
  )
}
