import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Reaper from '../images/Reaper.png';
import Carousel from '../components/Carousel';
import lucro from '../images/lucro.png';
import lucro2 from '../images/lucro2.png';
import lucro3 from '../images/lucro3.png';
import lucro4 from '../images/lucro4.png';
import lucro5 from '../images/lucro5.png';

const Results = () => {
  const Background = styled.div`
    background-color: #000;
    margin-top: -8rem;
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
      <Background>
        <Col md={{ offset: 3, span: 6 }}>
          <CTASuperTitle className='pt-5'>
            RESULTADOS DO BETCLUB NO MERCADO<Underline> DE</Underline> APOSTAS{' '}
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
      </Background>
    </Container>
  );
};

export default Results;
