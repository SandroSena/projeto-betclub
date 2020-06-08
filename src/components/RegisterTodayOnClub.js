import React from 'react';
import styled from 'styled-components';
import BackgroundPath from '../images/Baron.png';
import { Col, Container } from 'react-bootstrap';

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
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
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
      text-align: center;
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
      text-align: center;
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
      padding: 1rem;
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
    }
  `;

  const NumberText = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 46px;
    color: #fff;
    padding-left: 1rem;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 11px;
      line-height: 46px;
      text-align: center;
    }
  `;

  const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    align-items: center;
  `;

  const Underline = styled.span`
    text-decoration: none;
    border-bottom: 6px solid #fae700;
    padding-bottom: 5px;
    border-radius: 10%;
    cursor: pointer;
    @media (max-width: 767px) {
      display: none;
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
            INSCREVA-SE HOJE NO BETCLUB E <Underline>GAN</Underline>HE BÔNUS
            EXCLUSIVOS
          </RegisterTodayTitle>
        </Col>
        <Col
          md={{ span: 7, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
          className='pt-4'
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
            <Wrapper className='pt-5'>
              <Number>1. </Number>
              <NumberText> CURSO INTRODUTÓRIO</NumberText>
            </Wrapper>
            <Wrapper className='pt-5'>
              <Number>2. </Number>
              <NumberText> BÔNUS DE R$ 120,00 PARA COMEÇAR</NumberText>
            </Wrapper>
            <Wrapper className='pt-5'>
              <Number>3. </Number>
              <NumberText> ACESSO ÀS ANÁLISES DA NICE</NumberText>
            </Wrapper>
            <Wrapper className='pt-5'>
              <Number>4. </Number>
              <NumberText> SUPORTE ESPECIALIZADO</NumberText>
            </Wrapper>
          </ContainerText>
        </Col>
      </Container>
    </Background>
  );
};

export default RegisterTodayOnClub;
