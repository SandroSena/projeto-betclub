import React from 'react';
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
    font-family: 'Montserrat', sans-serif;  
   }
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
