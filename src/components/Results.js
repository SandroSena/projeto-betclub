import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Reaper from '../images/Rectangle 122.png';
import lucro from '../images/lucro.png';
import lucro2 from '../images/lucro2.png';
import lucro3 from '../images/lucro3.png';

const Results = () => {
  const Background = styled.div`
    background-color: #000;
    height: 100vh;
    display: flex;
    background-image: url('${Reaper}');
    background-repeat:round;
    flex-direction: row;
    flex-wrap: wrap;
    align-content:center;
    align-items:center;
    @media (max-width: 767px) {
      justify-content: center;
      height:auto;
    }
  `;

  const CTASuperTitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 3rem;
    color: #fafafa !important;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  `;

  const GainImg = styled.img`
    max-width: 100%;
    height: auto;
  `;

  const ImgWrapper = styled.div`
    object-fit: scale-down;
  `;
  return (
    <Container className='p-0' fluid>
      <Background>
        <Col md={{ offset: 3, span: 6 }}>
          <CTASuperTitle>
            RESULTADOS DO CLUB NO MERCADO DE APOSTAS{' '}
          </CTASuperTitle>
        </Col>
        <Row className='d-flex pt-5 justify-content-center w-100'>
          <Col className='d-flex justify-content-center' md={3}>
            <ImgWrapper style={{ objectFit: 'scale-down' }}>
              <GainImg src={lucro} />
            </ImgWrapper>
          </Col>
          <Col className='d-flex justify-content-center' md={3}>
            <ImgWrapper style={{ objectFit: 'scale-down' }}>
              <GainImg src={lucro2} />
            </ImgWrapper>
          </Col>
          <Col className='d-flex justify-content-center' md={3}>
            <ImgWrapper style={{ objectFit: 'scale-down' }}>
              <GainImg src={lucro3} />
            </ImgWrapper>
          </Col>
        </Row>
      </Background>
      <button>EU QUERO FAZER PARTE DO CLUB</button>
    </Container>
  );
};

export default Results;
