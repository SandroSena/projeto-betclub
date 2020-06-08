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
    font-size: 2.5rem;
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

  const WrapperButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 4rem;

    @media (max-width: 767px) {
      padding: 2rem;
    }
  `;
  const Button = styled.button`
    width: 567px;
    height: 79.38px;
    background: #00c27b;
    border: 1px solid #00c27b;
    box-sizing: border-box;
    box-shadow: 0px 0px 4px #00c27b;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    font-size: 27px;
    line-height: 46px;
    text-transform: uppercase;
    color: #ffffff;
    @media (max-width: 767px) {
      width: auto;
      height: auto;
      white-space: nowrap;
      font-size: 0.8rem;
    }
  `;
  const Underline = styled.span`
    text-decoration: none;
    border-bottom: 6px solid #fae700;
    padding-bottom: 5px;
    border-radius: 10%;
    cursor: pointer;

    @media (max-width: 767px) {
      border: none;
    }
  `;
  return (
    <Container className='p-0 pt-5' fluid>
      <div id='approval' />

      <Background>
        <Col md={{ offset: 4, span: 4 }} className='pt-5'>
          <CTASuperTitle>
            QUEM JÁ FAZ PARTE DO CLU<Underline>BE </Underline>APROVA
          </CTASuperTitle>
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
        <WrapperButton className='pb-5'>
          <Button>EU QUERO FAZER PARTE DO CLUB</Button>
        </WrapperButton>
      </Background>
    </Container>
  );
};

export default Results;
