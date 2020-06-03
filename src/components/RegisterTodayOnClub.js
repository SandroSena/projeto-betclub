import React from 'react';
import styled from 'styled-components';
import BackgroundPath from '../images/s9bg.png';
import { Col, Container, Row } from 'react-bootstrap';

const RegisterTodayOnClub = () => {
  const Background = styled.div`
    display:flex;
    align-items:center;
    background-image: url('${BackgroundPath}');
    width:100%;
    background-repeat: no-repeat;
    background-size: 100%;
    
    @media (max-width: 767px) {
      background-image:none;
      background-color:#000;
    }
  `;

  const RegisterTodayTitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 3rem;
    color: #fafafa !important;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  `;

  const RegisterTodayText = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1.5rem;
    color: #fafafa;

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  `;

  const ContainerText = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 814px;
    height: 447px;
    padding: 3rem;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85));
    border: 2px solid rgba(252, 255, 44, 0.3);
    box-sizing: border-box;

    @media (max-width: 767px) {
      width: 20rem;
      height: 50vh;
      padding: 0rem;
      padding-left: 2rem;
    }
  `;

  const Number = styled.h2`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 38px;
    color: #fcff2c;
    text-shadow: 0px 4px 40px rgba(252, 255, 44, 0.6);

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  `;

  const NumberText = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 46px;
    color: #fff;

    @media (max-width: 767px) {
      padding: 0;
      font-size: 0.6rem;
    }
  `;

  return (
    <Background>
      <Container className='p-0' fluid>
        <Col md={{ span: 7, offset: 1 }} xs={11} className='pt-5'>
          <RegisterTodayTitle>
            INSCREVA-SE HOJE NO CLUB E GANHE BÔNUS EXCLUSIVOS
          </RegisterTodayTitle>
        </Col>
        <Col md={{ span: 7, offset: 1 }} xs={11} className='pt-5'>
          <RegisterTodayText>
            Siga os passos dos membros do Club, ao participar você receberá
            imediatamente:
          </RegisterTodayText>
        </Col>
        <Col md={{ span: 7, offset: 1 }} xs={11}>
          <ContainerText>
            <Row>
              <Number>1.</Number>
              <NumberText>CURSO INTRODUTÓRIO</NumberText>
            </Row>
            <Row className='pt-5'>
              <Number>2.</Number>
              <NumberText>BÔNUS DE R$ 120,00 PARA COMEÇAR</NumberText>
            </Row>
            <Row className='pt-5'>
              <Number>3.</Number>
              <NumberText>ACESSO ÀS ANÁLISES DA NICE</NumberText>
            </Row>
            <Row className='pt-5'>
              <Number>4.</Number>
              <NumberText>SUPORTE ESPECIALIZADO</NumberText>
            </Row>
          </ContainerText>
        </Col>
      </Container>
    </Background>
  );
};

export default RegisterTodayOnClub;
