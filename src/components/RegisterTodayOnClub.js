import React from 'react';
import styled from 'styled-components';
import BackgroundPath from '../images/Baron.png';
import { Col, Container, Row } from 'react-bootstrap';

const RegisterTodayOnClub = () => {
  const Background = styled.div`
    display:flex;
    align-items:center;
    height:100vh;
    background-image: url('${BackgroundPath}');
    width:100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    
    @media (max-width: 767px) {
      height:auto;
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
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      font-size: 20px;
      line-height: 26px;
      /* or 130% */

      text-align: center;

      color: #ffffff;
    }
  `;

  const RegisterTodayText = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1.5rem;
    color: #fafafa;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      /* or 137% */

      text-align: center;

      color: #ffffff;
    }
  `;

  const ContainerText = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 814px;
    padding: 3rem;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85));
    border: 2px solid rgba(252, 255, 44, 0.3);
    box-sizing: border-box;

    @media (max-width: 767px) {
      width: auto;
      height: auto;
      padding: 0rem !important;
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
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 32px;
      /* identical to box height, or 80% */
    }
  `;

  const NumberText = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 46px;
    color: #fff;
    padding-left: 1rem;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 46px;
      /* identical to box height, or 232% */

      text-align: center;

      color: #ffffff;
    }
  `;

  return (
    <Background>
      <Container className='p-0' fluid>
        <Col
          md={{ span: 7, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
          className='pt-5'
        >
          <RegisterTodayTitle>
            INSCREVA-SE HOJE NO CLUB E GANHE BÔNUS EXCLUSIVOS
          </RegisterTodayTitle>
        </Col>
        <Col
          md={{ span: 7, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
          className='pt-5'
        >
          <RegisterTodayText>
            Siga os passos dos membros do Club, ao participar você receberá
            imediatamente:
          </RegisterTodayText>
        </Col>
        <Col
          className='p-0 justify-content-center'
          md={{ span: 7, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
        >
          <ContainerText>
            <Row className='d-flex w-100 flex-column align-items-center'>
              <Number>1. </Number>
              <NumberText> CURSO INTRODUTÓRIO</NumberText>
            </Row>
            <Row className='pt-5 d-flex w-100 flex-column align-items-center'>
              <Number>2. </Number>
              <NumberText> BÔNUS DE R$ 120,00 PARA COMEÇAR</NumberText>
            </Row>
            <Row className='pt-5 d-flex w-100 flex-column align-items-center'>
              <Number>3. </Number>
              <NumberText> ACESSO ÀS ANÁLISES DA NICE</NumberText>
            </Row>
            <Row className='pt-5 d-flex w-100 flex-column align-items-center'>
              <Number>4. </Number>
              <NumberText> SUPORTE ESPECIALIZADO</NumberText>
            </Row>
          </ContainerText>
        </Col>
      </Container>
    </Background>
  );
};

export default RegisterTodayOnClub;
