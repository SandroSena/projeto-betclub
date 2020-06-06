import React from 'react';
import styled from 'styled-components';
import BackgroundPath from '../images/Rectangle 111.png';
import { Col, Container } from 'react-bootstrap';
import RussianSniperImg from '../images/hiclipart 2.png';
import Intelligence from '../images/inteligencia.svg';
import Automation from '../images/automacao.svg';
import Supervision from '../images/supervisao.svg';
const RobotSecret = () => {
  const Background = styled.div`
    display:flex;
    align-items:center;
    background-image: url('${BackgroundPath}');
    height: 100vh;
    width:100%;
    background-repeat: no-repeat;
    background-size: 100%;
    margin-top:7rem;
    
    @media (max-width: 767px) {
      background-image:none;
      background-color:#000;
      height: auto;
    }
  `;

  const CTATitle = styled.h3`
    font-style: normal;
    font-weight: 900;
    font-size: 42px;
    line-height: 46px;
    /* or 111% */

    text-transform: uppercase !important;

    color: #ffffff !important;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 26px;
      /* or 108% */

      text-align: center;
      text-transform: uppercase;

      color: #ffffff;
    }
  `;

  const SvgTitle = styled.h3`
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 32px;
    /* identical to box height, or 133% */
    text-transform: uppercase;
    color: #ffffff !important;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 32px;
      /* identical to box height, or 133% */

      text-align: center;

      color: #ffffff;
    }
  `;

  const RussianSniper = styled.img`
    width: 20%;
    margin-top: 5rem;

    @media (max-width: 767px) {
      display: none;
    }
  `;

  const CTAText = styled.p`
    font-style: normal;
    font-size: 23px;
    line-height: 32px;
    color: #fff !important;

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

  const SVGText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    /* or 178% */

    color: #ffffff;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */

      text-align: center;

      color: #ffffff;
    }
  `;

  const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  `;

  const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;

  const SvgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      margin: 1rem;
    }
  `;

  const DataTextInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 60%;
  `;

  const SvgImg = styled.img`
    border: 2px solid rgba(252, 255, 44, 0.3);
    padding: 0.9rem;
    box-shadow: 0px 4px 40px rgba(250, 231, 0, 0.2);
    @media (max-width: 767px) {
      width: 50%;
      flex-direction: column;
      margin: 1rem;

      &:after {
        display: block;
        padding-bottom: 100%;
      }
    }
  `;

  return (
    <Background>
      <Container className='p-0 pb-5' fluid>
        <Col md={{ span: 10, offset: 1 }} xs={11}>
          <CTATitle>
            O SEGREDO DO NOSSO ROBÔ: INTELIGÊNCIA, AUTOMAÇÃO E SUPERVISÃO
          </CTATitle>
        </Col>
        <Col md={{ span: 10, offset: 1 }} xs={11}>
          <CTAText>
            A utilização de um programa avançado de Inteligência Artificial tem
            inúmeras vantagens sobre a análise humana. Inteligência, Automação e
            Supervisão são 3 (três) dos maiores diferencias da{' '}
            <strong>NICE</strong> – o único programa de análise de eSports da
            América Latina.
          </CTAText>
        </Col>
        <ContentContainer>
          <RussianSniper src={RussianSniperImg} />
          <DataContainer>
            <SvgContainer>
              <SvgImg src={Intelligence} />
              <DataTextInfo>
                <SvgTitle>Inteligência</SvgTitle>
                <SVGText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </SVGText>
              </DataTextInfo>
            </SvgContainer>
            <SvgContainer>
              <SvgImg src={Automation} />
              <DataTextInfo>
                <SvgTitle>Automação</SvgTitle>
                <SVGText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </SVGText>
              </DataTextInfo>
            </SvgContainer>
            <SvgContainer>
              <SvgImg src={Supervision} />
              <DataTextInfo>
                <SvgTitle>Supervisão</SvgTitle>
                <SVGText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </SVGText>
              </DataTextInfo>
            </SvgContainer>
          </DataContainer>
        </ContentContainer>
      </Container>
    </Background>
  );
};

export default RobotSecret;
