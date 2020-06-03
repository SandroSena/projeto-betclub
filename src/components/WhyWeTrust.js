import React from 'react';
import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';
import ganho from '../images/ganho.svg';
import perda from '../images/perda.svg';

const WhyWeTrust = () => {
  const Background = styled.div`
    background-color: #000;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 767px) {
      justify-content: center;
      height: auto;
    }
  `;

  const WhyWeTrustTitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 3rem;
    color: #fafafa !important;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  `;

  const WhyWeTrustText = styled.p`
    font-family: Montserrat;
    font-size: 1.5rem;
    color: #fafafa !important;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  `;

  const WhyWeTrustSpanRed = styled.span`
    color: rgba(255, 70, 91, 0.65);
  `;

  const WhyWeTrustSpanGreen = styled.span`
    color: rgba(0, 194, 123, 0.65);
  `;

  const ContainerTextImgs = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 80%;
  `;

  const SvgImg = styled.img`
    margin-left: -2.5rem;
  `;

  const InfoContainer = styled.div`
    text-align: center;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    border: 2px solid rgba(252, 255, 44, 0.3);
    background-color: #000;
    margin-bottom: -6rem;
    box-shadow: 0px 4px 40px rgba(250, 231, 0, 0.2);

    @media (max-width: 767px) {
      border: none;
      flex-direction: column;
      box-shadow: none;
    }
  `;
  const DataInfo = styled.h3`
    color: #fcff2c;
    font-weight: bold;
    font-size: 4.4rem;
    @media (max-width: 767px) {
      font-size: 2rem;
    }
  `;
  const EachInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    width: 15%;
    padding:2rem;
    @media (max-width: 767px) {
      width: auto;
    }
  `;
  const DataLabel = styled.span`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    color: #fafafa;
  `;

  const Button = styled.button`
    width: 567px;
    height: 79.38px;
    background: #00c27b;
    border: 1px solid #00c27b;
    box-sizing: border-box;
    box-shadow: 0px 0px 4px #00c27b;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    font-size: 27px;
    line-height: 46px;
    text-transform: uppercase;
    color: #ffffff;
    position: relative;
    bottom:-3.7rem;
    @media (max-width: 767px) {
      width: auto;
      height: auto;
      white-space:nowrap;
      font-size:.8rem
      }
  `;
  return (
    <Container className='pt-5 d-flex flex-column align-items-center' fluid>
      <Background>
        <Col
          md={{ offset: 1, span: 5 }}
          className='h-75 p-1 d-flex flex-column justify-content-between'
        >
          <WhyWeTrustTitle>
            POR QUE CONFIAMOS <br />
            NA NICE...
          </WhyWeTrustTitle>
          <ContainerTextImgs>
            <SvgImg src={perda} />
            <WhyWeTrustText>
              QUANDO A ANÁLISE ESTÁ EQUIVOCADA,
              <WhyWeTrustSpanRed> PERDEMOS POUCO!</WhyWeTrustSpanRed>
            </WhyWeTrustText>
          </ContainerTextImgs>
          <ContainerTextImgs>
            <SvgImg src={ganho} />
            <WhyWeTrustText>
              QUANDO A ANÁLISE ESTÁ CERTA,{' '}
              <WhyWeTrustSpanGreen>GANHAMOS MUITO!</WhyWeTrustSpanGreen>
            </WhyWeTrustText>
          </ContainerTextImgs>
        </Col>
        <Col
          md={{ span: 5 }}
          className='h-75 p-1 d-flex flex-column justify-content-between'
        >
          <WhyWeTrustText>
            Ao contrário dos analistas humanos, a NICE é imune a erros
            emocionais. Seus critérios são puramente matemáticos.
          </WhyWeTrustText>
          <WhyWeTrustText>
            Baseada em algoritmos de análise criados por Juliano Fontes, o mais
            respeitado Trader Esportivo do Brasil, a NICE analisa TODOS os jogos
            disponíveis e indica as melhores oportunidades do mercado.
          </WhyWeTrustText>
          <WhyWeTrustText>
            Criada inicialmente para analisar jogos de Futebol, foi atualizada
            para abranger também os Esportes Eletrônicos, que estão em
            crescimento acelerado com o período de isolamento social pelo mundo.
          </WhyWeTrustText>
          <WhyWeTrustText className='pb-4'>
            Confira alguns números da NICE:
          </WhyWeTrustText>
        </Col>
      </Background>
      <InfoContainer>
        <EachInfoContainer>
          <DataInfo>65%</DataInfo>
          <DataLabel>taxa de acerto</DataLabel>
        </EachInfoContainer>
        <EachInfoContainer>
          <DataInfo>81%</DataInfo>
          <DataLabel>lucro em abril 2020</DataLabel>
        </EachInfoContainer>
        <EachInfoContainer>
          <DataInfo>24/7</DataInfo>
          <DataLabel>análises 24 horas por dia, 7 dias por semana</DataLabel>
        </EachInfoContainer>
        <EachInfoContainer>
          <DataInfo>2355</DataInfo>
          <DataLabel>jogos analisados</DataLabel>
        </EachInfoContainer>
      </InfoContainer>

      <Button>Teste Grátis por 7 dias</Button>
    </Container>
  );
};

export default WhyWeTrust;
