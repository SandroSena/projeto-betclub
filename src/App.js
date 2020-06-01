import React from 'react';
import Navbar from './components/Navbar';
import CallToAction from './components/CallToAction';
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AIAnalysis from './components/AIAnalysis';
import RobotSecret from './components/RobotSecret';
import Tips from './components/Tips';
import EsportsFuture from './components/EsportsFuture';
import Bonus from './components/Bonus';
import WhyWeTrust from './components/WhyWeTrust';
import Founder from './components/Founder';
import RegisterTodayOnClub from './components/RegisterTodayOnClub';
import SevenDaysFree from './components/SevenDaysFree';

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
        <Tips />
        <EsportsFuture />
        <Bonus />
        <WhyWeTrust />
        <Founder />
        <RegisterTodayOnClub />
        <SevenDaysFree />
      </Container>
    </>
  );
};

export default App;
