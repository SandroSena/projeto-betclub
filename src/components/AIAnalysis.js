import React from 'react';
import styled from 'styled-components';
import Cellphone from '../images/celular.png';
import { Col, Container } from 'react-bootstrap';

const AIAnalysis = () => {
  const Background = styled.div`
    background-color: #000;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 767px) {
      justify-content: center;
    }
  `;

  const CellphoneImg = styled.img`
    margin-top: -15rem;
    width: 40%;
    @media (max-width: 767px) {
      margin:auto;
      width: 70%;
    }
  `;
  
  const CTATitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 3rem;
    color: #fafafa !important;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  `;

  const TextContainer = styled.div``;
  const CTAText = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1.5rem;
    color: #fafafa;

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  `;
  return (
    <Container className='p-0' fluid>
      <Background>
        <Col xs={12} md={{ span: 6, offset: 1 }}>
          <TextContainer>
            <CTATitle>Análises utilizando inteligência artificial</CTATitle>
            <CTAText>
              Deixe todo o trabalho pesado nas mãos de especialistas com mais de
              10 anos de experiência no mercado e mais de R$ 670.000,00 em lucro
              nos últimos 12 meses.
            </CTAText>
            <CTAText>
              Se você tem disciplina para COPIAR E COLAR as recomendações dos
              nossos analistas de forma consistente, logo você será capaz de
              tirar seu sustento e realizar os seus sonhos através deste
              negócio.
            </CTAText>
          </TextContainer>
        </Col>
        <CellphoneImg src={Cellphone} />
      </Background>
    </Container>
  );
};

export default AIAnalysis;
