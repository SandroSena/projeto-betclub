import React from 'react';
import Navbar from './components/Navbar';
import CallToAction from './components/CallToAction';
import AIAnalysis from './components/AIAnalysis';
import RobotSecret from './components/RobotSecret';
import Tips from './components/Tips';
import EsportsFuture from './components/EsportsFuture';
import Bonus from './components/Bonus';
import WhyWeTrust from './components/WhyWeTrust';
import Founder from './components/Founder';
import RegisterTodayOnClub from './components/RegisterTodayOnClub';
import SevenDaysFree from './components/SevenDaysFree';
import Results from './components/Results';
import Approval from './components/Approval';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
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
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
