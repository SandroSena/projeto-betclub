import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from '../components/Carousel';
import feedback1 from '../images/feedback1.png';
import feedback2 from '../images/feedback2.png';
import feedback3 from '../images/feedback3.png';
import feedback4 from '../images/feedback4.png';
import feedback5 from '../images/feedback5.png';
import feedback6 from '../images/feedback6.png';

const Results = () => {
  const Background = styled.div`
    background-color: #000;
    height: 130vh;
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
    <Container className='p-0 pt-5' fluid>
      <Background>
        <Col md={{ offset: 4, span: 4 }} className='pt-5'>
          <CTASuperTitle>QUEM JÁ FAZ PARTE DO CLUBE APROVA</CTASuperTitle>
        </Col>
        <Row className='d-flex pt-5 justify-content-center w-100'>
          <Carousel
            carouselItems={[
              <GainImg src={feedback1} />,
              <GainImg src={feedback2} />,
              <GainImg src={feedback3} />,
              <GainImg src={feedback4} />,
              <GainImg src={feedback5} />,
              <GainImg src={feedback6} />,
            ]}
            time={999999}
            itemsDisplayed={3}
          />
        </Row>
      </Background>
    </Container>
  );
};

export default Results;
