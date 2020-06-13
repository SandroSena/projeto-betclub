import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Reaper from '../images/Reaper.png';
import Carousel, { consts } from 'react-elastic-carousel';
import Left from '../images/left.png';
import Right from '../images/right.png';
import Bolinha from '../images/bolinha.png';
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
  const Arrow = styled.img`
    cursor: pointer;
    @media (max-width: 767px) {
      width: 12px;
      height: 19px;
    }
  `;
  const ArrowButton = styled.button`
    border: none;
    background-color: transparent;
  `;
  const ImgBolinha = styled.img`
    width: 11px;
    height: 11px;
    margin: 4px;
    cursor: pointer;
  `;
  const ImgBolinhaAmarela = styled.img`
    width: 11px;
    height: 11px;
    background: #fae700;
    box-shadow: 0px 0px 20px rgba(250, 231, 0, 0.5);
    border-radius: 50%;
    margin: 4px;
  `;
  const BolinhaContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 6rem;
  `;
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? <Arrow src={Left} /> : <Arrow src={Right} />;
    return (
      <ArrowButton onClick={onClick} disabled={isEdge}>
        {pointer}
      </ArrowButton>
    );
  };
  return (
    <Container className='p-0 pt-5' fluid>
      <Background>
        <Col md={{ offset: 3, span: 6 }}>
          <CTASuperTitle className='pt-5'>
            RESULTADOS DO BETCLUB NO MERCADO<Underline> DE</Underline> APOSTAS{' '}
          </CTASuperTitle>
        </Col>
        <Carousel
          renderArrow={myArrow}
          breakPoints={[
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 3, itemsToScroll: 3 },
            { width: 850, itemsToShow: 3, itemsToScroll: 3 },
            { width: 1150, itemsToShow: 3, itemsToScroll: 3 },
            { width: 1450, itemsToShow: 3, itemsToScroll: 3 },
            { width: 1750, itemsToShow: 3, itemsToScroll: 3 },
          ]}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <BolinhaContainer direction='row'>
                {pages.map(page => {
                  const isActivePage = activePage === page;
                  return !isActivePage ? (
                    <ImgBolinha
                      src={Bolinha}
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                    />
                  ) : (
                    <ImgBolinhaAmarela />
                  );
                })}
              </BolinhaContainer>
            );
          }}
        >
          <GainImg src={lucro} />
          <GainImg src={lucro2} />
          <GainImg src={lucro3} />
          <GainImg src={lucro4} />
          <GainImg src={lucro5} />
        </Carousel>
      </Background>
    </Container>
  );
};

export default Results;
