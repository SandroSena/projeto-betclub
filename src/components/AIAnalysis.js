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
              Deixe todo o trabalho pesado nas mãos da <strong>NICE</strong>, um programa de
              <strong>INTELIGÊNCIA ARTIFICIAL</strong> altamente avançado que analisa TODOS os
              jogos diariamente para selecionar e te enviar as <strong>MELHORES</strong>
              oportunidades do mercado.
            </CTAText>
            <CTAText>
            Você só precisa <strong>COPIAR E COLAR</strong> as nossas recomendações para conquistar suas metas financeiras através de apostas on-line focadas nos Esportes Eletrônicos.
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
