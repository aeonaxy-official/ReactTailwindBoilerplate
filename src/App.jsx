import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Home from "./Components/Home/home";
import Articles from "./Components/Articles/Articles";
import Firebase from "./Components/Firebase/Firebase";
import Newsletter from "./Components/Newsletter/Newsletter";
import Features from "./Components/Features/Features";
import Case from "./Components/CaseStudy/Case";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
   
    <>
       <Router>
      <Routes>
        <Route path="/"  element={<Home/>}>
        </Route>
        <Route path="/articles"  element={<Articles/>}>
        </Route>
        <Route path="/firebase"  element={<Firebase/>}>
        </Route>
        <Route path="/newsletter"  element={<Newsletter/>}>
        </Route>
        <Route path="/features"  element={<Features/>}>
        </Route>
        <Route path="/case"  element={<Case/>}>
        </Route>
        <Route path="/footer"  element={<Footer/>}>
        </Route>

       
      </Routes>
    </Router>
    </>
  );
}

export default App;
