import React from 'react';
import Navbar from './components/Navbar';
import CallToAction from './components/CallToAction';
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AIAnalysis from './components/AIAnalysis';
import RobotSecret from './components/RobotSecret';

const App = () => {
  const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    background-color:#000;
    font-family: 'Montserrat', sans-serif;  }
`;
  return (
    <>
      <Container className='p-0' fluid>
        <GlobalStyle />
        <Navbar />
        <CallToAction />
        <AIAnalysis />
        <RobotSecret />
      </Container>
    </>
  );
};

export default App;
