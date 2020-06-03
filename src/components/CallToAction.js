import React from 'react';
import styled from 'styled-components';
import BackgroundPath from '../images/Rectangle 51.png';
import { Col, Container } from 'react-bootstrap';

const CallToAction = () => {
  const Background = styled.div`
    display:flex;
    align-items:center;
    background-image: url('${BackgroundPath}');
    height: 100vh;
    width:100%;
    background-repeat: no-repeat;
    background-size: 100%;

    @media (max-width: 767px) {
      background-image:none;
      background-color:#000;
    }
  `;

  const NoBreak = styled.span`
    white-space: nowrap;
    @media (max-width: 767px) {
      white-space: pre-wrap;
    }
  `;

  const CTATitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 4rem;
    color: #fafafa !important;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  `;

  const CTAText = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 2rem;
    color: #fafafa;

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  `;

  const Button = styled.button`
    background-color: transparent;
    color: yellow;
    border: 3px solid yellow;
    text-transform: uppercase;
    padding: 0.5rem;
    font-weight: bold;
  `;

  return (
    <Background>
      <Container className='p-0' fluid>
        <Col md={{ span: 8, offset: 1 }} xs={11}>
          <CTATitle>
            <NoBreak>Lucre de R$ 1.000,00 a R$ 2.000,00</NoBreak> POR MÊS COM A
            EXPLOSÃO DOS E-SPORTS NO MUNDO
          </CTATitle>
        </Col>
        <Col md={{ span: 6, offset: 1 }} xs={11}>
          <CTAText>
            O isolamento social está criando uma NOVA ONDA nas Apostas Online
            com a ascensão DEFINITIVA dos Esportes Eletrônicos (eSports).
          </CTAText>
        </Col>
        <Col md={{ span: 3, offset: 1 }} xs={12}>
          <Button>Saiba Mais</Button>
        </Col>
      </Container>
    </Background>
  );
};

export default CallToAction;
