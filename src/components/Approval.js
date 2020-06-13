import React, { useState } from 'react';
import styled from 'styled-components';
import { Col, Container } from 'react-bootstrap';
import Carousel, { consts } from 'react-elastic-carousel';
import Left from '../images/left.png';
import Right from '../images/right.png';
import Bolinha from '../images/bolinha.png';
import feedback1 from '../images/feedback1.png';
import feedback2 from '../images/feedback2.png';
import feedback3 from '../images/feedback3.png';
import feedback4 from '../images/feedback4.png';
import feedback5 from '../images/feedback5.png';
import feedback6 from '../images/feedback6.png';
import ModalCallToAction from '../components/ModalCallToAction';

const Results = () => {
  const [isModalOpenCallToAction, setIsModalOpenCallToAction] = useState(false);

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
    font-size: 25px;
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
    width: 8rem;
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
      <div id='approval' />
      <ModalCallToAction
        isModalOpenCallToAction={isModalOpenCallToAction}
        onHide={() => setIsModalOpenCallToAction(false)}
      />
      <Background>
        <Col md={{ offset: 4, span: 4 }} className='pt-5'>
          <CTASuperTitle className='pt-5'>
            QUEM JÁ FAZ PARTE DO CLU<Underline>BE </Underline>APROVA
          </CTASuperTitle>
        </Col>
        <Carousel
          style={{ minHeight: 'auto' }}
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
                {pages.map((page) => {
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
          <GainImg src={feedback1} />
          <GainImg src={feedback2} />
          <GainImg src={feedback3} />
          <GainImg src={feedback4} />
          <GainImg src={feedback5} />
          <GainImg src={feedback6} />
        </Carousel>
        <WrapperButton className='pb-5'>
          <Button onClick={() => setIsModalOpenCallToAction(true)}>
            EU QUERO FAZER PARTE DO BETCLUB
          </Button>
        </WrapperButton>
      </Background>
    </Container>
  );
};

export default Results;
