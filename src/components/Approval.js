import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Reaper from '../images/Rectangle 122.png';
import feedback from '../images/feedback.png';
import feedback1 from '../images/feedback1.png';
import feedback2 from '../images/feedback2.png';

const Results = () => {
  const Background = styled.div`
    background-color: #000;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    @media (max-width: 767px) {
      justify-content: center;
      height: auto;
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
        <Col md={{ offset: 4, span: 4 }}>
          <CTASuperTitle>QUEM JÁ FAZ PARTE DO CLUBE APROVA</CTASuperTitle>
        </Col>
        <Row className='d-flex pt-5 justify-content-center w-100'>
          <Col className='d-flex justify-content-center' md={3}>
            <ImgWrapper style={{ objectFit: 'scale-down' }}>
              <GainImg src={feedback} />
            </ImgWrapper>
          </Col>
          <Col className='d-flex justify-content-center' md={3}>
            <ImgWrapper style={{ objectFit: 'scale-down' }}>
              <GainImg src={feedback1} />
            </ImgWrapper>
          </Col>
          <Col className='d-flex justify-content-center' md={3}>
            <ImgWrapper style={{ objectFit: 'scale-down' }}>
              <GainImg src={feedback2} />
            </ImgWrapper>
          </Col>
        </Row>
      </Background>
    </Container>
  );
};

export default Results;
