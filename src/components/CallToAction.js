import React from 'react';
import styled from 'styled-components';
import BackgroundPath from '../images/Group 531.png';
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
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 65px;
    color: #ffffff !important;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  `;

  const CTAText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    color: #ffffff !important;

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  `;

  const Button = styled.button`
    background-color: transparent;
    color: rgb(250, 231, 0) !important;
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
            <NoBreak>Lucre de R$ 1.000,00 a R$ 2.000,00</NoBreak>
            <NoBreak>
              {' '}
              POR MÊS COM A EXPLOSÃO
              <br /> DOS
            </NoBreak>{' '}
            E-SPORTS.
          </CTATitle>
        </Col>
        <Col md={{ span: 6, offset: 1 }} xs={11}>
          <CTAText>
            <NoBreak>
              Com apenas 15 minutos por dia invista na modalidade que mais cresce no mundo das
            </NoBreak>{' '}
            <br />
            apostas online.
          </CTAText>
        </Col>
        <Col md={{ span: 3, offset: 1 }} xs={12}>
          <Button>Adquira Já</Button>
        </Col>
      </Container>
    </Background>
  );
};

export default CallToAction;
