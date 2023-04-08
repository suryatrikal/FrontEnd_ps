import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Footer from './Footer';
import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    {/* <h1>hello</h1>
   
    <h1>I am here</h1> */}
    <Navbar/>
    <Container><Row>
      <Col xs={3}><Card  title="CSE" srcimg="https://www.accurate.in/img/college/1662107573-bachelor-in-computer-science-engineering.jpg" link="/cs"/></Col>
      <Col xs={3}><Card title="ECE" srcimg="https://mriirs.edu.in/wp-content/uploads/2021/06/Electronics-and-Communication-Engineering-ECE.jpg" link="/ece"/></Col>
      <Col xs={3}><Card  title="ME" srcimg="https://armiet.in/wp-content/uploads/2020/03/B1P1.jpeg" link="/me"/></Col>
      <Col xs={3}><Card title="EE" srcimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcWKJskz7gZP3FLytbF_ZbB7ra3SAvr3dDyzRgXpkVyKlINKe4w0u7yjkW-6XJf5Xb90&usqp=CAU" link="/ee"/></Col>
    </Row></Container>
    <Footer/>

    
    
    
   
    
    
    

    </>
  );
}

export default App;
