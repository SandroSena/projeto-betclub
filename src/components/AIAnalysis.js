import React from 'react';
import styled from 'styled-components';
import Cellphone from '../images/celular2.png';
import { Col, Container } from 'react-bootstrap';

const AIAnalysis = () => {
  const Background = styled.div`
    background-color: #000;
    height: 75vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 767px) {
      justify-content: center;
      height: auto;
    }
  `;

  const CellphoneImg = styled.img`
    width: 343px;
    height: 618px;
    margin-top: -10rem;
    display: block;
    margin: auto 0;
    @media (max-width: 767px) {
      margin: auto;
      width: 70%;
      height: 100%;
    }
  `;

  const CTATitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 42px;
    color: #fafafa !important;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 26px;
      /* or 108% */

      text-align: center;

      color: #ffffff;
    }
  `;

  const TextContainer = styled.div``;
  const CTAText = styled.p`
    font-family: Montserrat;
    font-size: 1.5rem;
    color: #fafafa;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */
      text-align: center;
      color: #ffffff;
    }
  `;
  return (
    <Container className='p-0' fluid>
      <div id='aIAnalysis' />
      <Background>
        <Col
          className='d-flex flex-column justify-content-center h-100'
          xs={12}
          md={{ span: 5, offset: 1 }}
        >
          <TextContainer>
            <CTATitle className='pt-5'>
              Análises utilizando inteligência artificial
            </CTATitle>
            <CTAText>
              Deixe todo o trabalho pesado nas mãos de especialistas com mais de
              10 anos de experiência no mercado e mais de{' '}
              <strong>R$ 670.000,00</strong> em lucro nos últimos
              <strong> 12 meses.</strong>
            </CTAText>
            <CTAText>
              Se você tem disciplina para <strong>COPIAR E COLAR</strong> as
              recomendações dos nossos analistas de forma consistente, logo você
              será capaz de tirar seu sustento e realizar os seus sonhos através
              deste negócio.
            </CTAText>
          </TextContainer>
        </Col>
        <Col
          className='d-flex justify-content-baseline h-100'
          xs={12}
          md={{ span: 5, offset: 1 }}
        >
          <CellphoneImg src={Cellphone} />
        </Col>
      </Background>
    </Container>
  );
};

export default AIAnalysis;
