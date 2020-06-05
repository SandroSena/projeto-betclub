import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Reaper from '../images/Reaper.png';
import Carousel from '../components/Carousel';
import lucro from '../images/lucro.png';
import lucro2 from '../images/lucro2.png';
import lucro3 from '../images/lucro3.png';
import lucro4 from '../images/lucro2.png';
import lucro5 from '../images/lucro3.png';

const Results = () => {
  const Background = styled.div`
    background-color: #000;
    height: 100vh;
    display: flex;
    background-image: url('${Reaper}');
    background-size: 100% 100%;
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

  const WrapperButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 2.5rem;

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
  return (
    <Container className='p-0 pt-5' fluid>
      <Background>
        <Col md={{ offset: 3, span: 6 }}>
          <CTASuperTitle className='pt-5'>
            RESULTADOS DO CLUB NO MERCADO DE APOSTAS{' '}
          </CTASuperTitle>
        </Col>
        <Row className='d-flex pt-5 justify-content-center w-100'>
          <Carousel
            carouselItems={[
              <GainImg src={lucro} />,
              <GainImg src={lucro2} />,
              <GainImg src={lucro3} />,
              <GainImg src={lucro4} />,
              <GainImg src={lucro5} />,
            ]}
            time={999999}
            itemsDisplayed={3}
          />
        </Row>
        <WrapperButton>
          <Button>EU QUERO FAZER PARTE DO CLUB</Button>
        </WrapperButton>
      </Background>
    </Container>
  );
};

export default Results;
