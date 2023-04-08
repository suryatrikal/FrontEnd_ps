import React from 'react';
 
// import './App.css';
import  Home from "./Home";
import  Cs from "./Cs";
// import   from "./Cs";
// import  Cs from "./Cs";
// import  Cs from "./Cs";
import  Signup from "./Signup";
import  Login from "./Login";
import  Ece from "./Ece";
import  Ee from "./Ee";
import  Me from "./Me";
import ReactDOM from "react-dom";
import Layout from "./Layout";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
 

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './login';
function App() {
  return (
  
    
      <Routes>
        <Route  path="/" element={<Home/>}/>
          {/* console.log("yes"); */}
          <Route  path='/home' element={<Home />}/>
          <Route path="/cs" element={<Cs />} />
          <Route path="/ece" element={<Ece/>} />
          <Route path="/ee" element={<Cs />} />
          <Route path="/me" element={<Cs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
         {/* </Route> */}
         </Routes>
    
    

        
  );
}

export default App;
