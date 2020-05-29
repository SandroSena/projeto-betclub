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
  `;

  const SvgImg = styled.img`
    margin-left: -2.5rem;
  `;

  return (
    <Container className='pt-5' fluid>
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
              QUANDO A ANÁLISE ESTÁ EQUIVOCADA,{' '}
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
        <Col md={{ span: 5 }} className='h-75'>
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
          <WhyWeTrustText>Confira alguns números da NICE:</WhyWeTrustText>
        </Col>
      </Background>
    </Container>
  );
};

export default WhyWeTrust;
