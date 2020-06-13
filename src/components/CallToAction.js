import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundPath from '../images/Group 531.png';
import BackgroundPathMobile from '../images/KatarinaMobile.png';
import { Col, Container } from 'react-bootstrap';
import LogoPath from '../images/image 14.png';
import ModalCallToAction from '../components/ModalCallToAction';

const CallToAction = () => {
  const [isModalOpenCallToAction, setIsModalOpenCallToAction] = useState(false);

  const Background = styled.div`
    display:flex;
    align-items:center;
    background-image: url('${BackgroundPath}');
    height: 100vh;
    background-repeat: no-repeat;  
    background-size: cover;
    background-position: center center;
    /* background-attachment: fixed; */

    @media (max-width: 767px) {
    backGround-image: url('${BackgroundPathMobile}');
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
    color: #fff !important;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      font-size: 25px;
      line-height: 26px;
      text-align: center;
      padding: 80px 0 20px 0;
    }
  `;

  const CTAText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    color: #fff !important;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      padding-bottom: 80px;
    }
  `;

  const LoginButton = styled.a`
    background-color: transparent;
    color: rgb(250, 231, 0) !important;
    border: 3px solid yellow;
    text-transform: uppercase;
    padding: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    width: 45%;
    text-align: center;
    white-space: nowrap;

    @media (max-width: 767px) {
      margin-left: auto;
      margin-right: auto;
    }
  `;

  const Button = styled.a`
    background-color: rgb(250, 231, 0);
    color: rgba(1, 1, 1, 1) !important;
    border: 3px solid yellow;
    text-transform: uppercase;
    padding: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    width: 45%;
    text-align: center;
    white-space: nowrap;

    @media (max-width: 767px) {
      margin-left: auto;
      margin-right: auto;
    }
  `;

  const LogoImg = styled.img`
    display: none;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 767px) {
      display: block;
    }
  `;

  return (
    <>
      <div id='callToAction' />
      <Background>
        <ModalCallToAction
          isModalOpenCallToAction={isModalOpenCallToAction}
          onHide={() => setIsModalOpenCallToAction(false)}
        />
        <Container className='p-0' fluid>
          <LogoImg src={LogoPath} />
          <Col md={{ span: 8, offset: 1 }} xs={12}>
            <CTATitle>
              <NoBreak>Lucre de R$ 1.000,00 a R$ 2.000,00</NoBreak>
              <NoBreak> POR MÊS COM A EXPLOSÃO DOS</NoBreak>
              <NoBreak> E-SPORTS</NoBreak>
            </CTATitle>
          </Col>
          <Col md={{ span: 6, offset: 1 }} xs={12}>
            <CTAText>
              <NoBreak>
                Com apenas 15 minutos por dia, invista na modalidade que mais
                cresce no
                <br /> mundo das
              </NoBreak>{' '}
              apostas online
            </CTAText>
          </Col>
          <Col
            className='d-flex justify-content-between justify-xs-content-center'
            md={{ span: 3, offset: 1 }}
            xs={12}
          >
            <Button onClick={() => setIsModalOpenCallToAction(true)}>Assine Já</Button>
            <LoginButton
              href='https://betclubesports.club.hotmart.com/login'
              target='_blank'
            >
              Login
            </LoginButton>
          </Col>
        </Container>
      </Background>
    </>
  );
};

export default CallToAction;
