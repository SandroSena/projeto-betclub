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
    margin-top:15rem;
    
    @media (max-width: 767px) {
      background-image:none;
      background-color:#000;
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
  const SvgTitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 1rem;
    color: #fafafa !important;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  `;

  const RussianSniper = styled.img`
    width: 20%;
    margin-top: 5rem;
  `;

  const CTAText = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1.5rem;
    color: #fafafa;

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  `;

  const SVGText = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 0.8rem;
    color: #fafafa;

    @media (max-width: 767px) {
      font-size: 0.8rem;
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
  `;

  const DataTextInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
  `;

  const SvgImg = styled.img`
    border: 2px solid rgba(252, 255, 44, 0.3);
    padding: 0.9rem;
    box-shadow: 0px 4px 40px rgba(250, 231, 0, 0.2);
  `;

  return (
    <Background>
      <Container className='p-0' fluid>
        <Col md={{ span: 10, offset: 1 }} xs={11}>
          <CTATitle>
            O SEGREDO DO NOSSO ROBÔ: INTELIGÊNCIA, AUTOMAÇÃO E SUPERVISÃO
          </CTATitle>
        </Col>
        <Col md={{ span: 10, offset: 1 }} xs={11}>
          <CTAText>
            A utilização de um programa avançado de Inteligência Artificial tem
            inúmeras vantagens sobre a análise humana. Inteligência, Automação e
            Supervisão são 3 (três) dos maiores diferencias da NICE – o único
            programa de análise de eSports da América Latina.
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
                <SvgTitle>Inteligência</SvgTitle>
                <SVGText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </SVGText>
              </DataTextInfo>
            </SvgContainer>
            <SvgContainer>
              <SvgImg src={Supervision} />
              <DataTextInfo>
                <SvgTitle>Inteligência</SvgTitle>
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
