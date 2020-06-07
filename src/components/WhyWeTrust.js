import React from 'react';
import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';
import ganho from '../images/ganho.svg';
import perda from '../images/perda.svg';

const WhyWeTrust = () => {
  const Background = styled.div`
    background-color: #000;
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
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 26px;
      /* or 108% */

      text-align: center;

      color: #ffffff;
    }
  `;

  const WhyWeTrustText = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #ffffff;
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

  const WhyWeTrustSpanRed = styled.span`
    color: #ff465b;
    font-weight: bolder;
    text-shadow: 0px 4px 40px #ff465b;
    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      /* or 137% */

      text-align: center;

      color: #ffffff;
    }
  `;

  const WhyWeTrustSpanGreen = styled.span`
    color: #00c27b;
    font-weight: bolder;
    text-shadow: 0px 4px 40px #00c27b;
    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      /* or 137% */

      text-align: center;

      color: #ffffff;
    }
  `;

  const ContainerTextImgs = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
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
    text-shadow: 0px 4px 40px rgba(252, 255, 44, 0.6);
    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 80px;
      line-height: 32px;
      margin-bottom: 2rem;
      /* identical to box height, or 40% */
    }
  `;
  const EachInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    padding: 2rem;
    width: 25%;
    @media (max-width: 767px) {
      width: auto;
    }
  `;
  const DataLabel = styled.span`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    color: #fafafa;
    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      /* identical to box height, or 133% */

      color: #ffffff;
    }
  `;

  const Button = styled.button`
    width: 567px;
    height: 80px;
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
    bottom: -3.7rem;
    @media (max-width: 767px) {
      font-family: Montserrat;
      width: 90%;
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 30px;
      /* identical to box height, or 169% */

      text-align: center;
      text-transform: uppercase;

      color: #ffffff;
    }
  `;
  const SmallText = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;

    /* identical to box height, or 200% */

    text-align: center;

    color: #ffffff;
  `;
  const NoBreak = styled.span`
    white-space: nowrap;
    @media (max-width: 767px) {
      white-space: pre-wrap;
    }
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
    <Container className='d-flex flex-column align-items-center pt-5' fluid>
      <Background>
        <Col
          md={{ offset: 1, span: 5 }}
          className='h-75 p-1 d-flex flex-column align-items-center justify-content-between'
        >
          <WhyWeTrustTitle>
            POR QUE CONFIAMOS <Underline>NA</Underline> NICE...
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
            Ao contrário dos analistas humanos, a <strong>NICE</strong> é imune
            a erros emocionais. Seus critérios são puramente matemáticos.
          </WhyWeTrustText>
          <WhyWeTrustText>
            Baseada em algoritmos de análise criados por Juliano Fontes, o mais
            respeitado Trader Esportivo do Brasil, a <strong>NICE</strong>{' '}
            analisa <strong>TODOS</strong> os jogos disponíveis e indica as
            melhores oportunidades do mercado.
          </WhyWeTrustText>
          <WhyWeTrustText>
            Criada inicialmente para analisar jogos de Futebol, foi atualizada
            para abranger também os Esportes Eletrônicos, que estão em
            crescimento acelerado com o período de isolamento social pelo mundo.
          </WhyWeTrustText>
          <WhyWeTrustText className='pb-4'>
            Confira alguns números da <strong>NICE</strong>:
          </WhyWeTrustText>
        </Col>
      </Background>
      <InfoContainer>
        <div id='info-container' />
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
          <DataLabel>
            <NoBreak>análises 24 horas por</NoBreak>
            <NoBreak> dia, 7 dias por semana</NoBreak>
          </DataLabel>
        </EachInfoContainer>
        <EachInfoContainer>
          <DataInfo>2355</DataInfo>
          <DataLabel>jogos analisados</DataLabel>
        </EachInfoContainer>
      </InfoContainer>

      <Button>
        ADQUIRA POR APENAS R$ 49/MÊS
        <br />
        <SmallText>plano mensal cancele quando quiser</SmallText>
      </Button>
    </Container>
  );
};

export default WhyWeTrust;
