import React from 'react';
import Navbar from './components/Navbar';
import CallToAction from './components/CallToAction';
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    font-family: 'Montserrat', sans-serif;  }
`;
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <CallToAction></CallToAction>
    </div>
  );
};

export default App;
