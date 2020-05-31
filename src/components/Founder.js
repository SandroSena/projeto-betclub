import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import BackgroundPath from '../images/Rectangle 119.png';
import FounderPath from '../images/RectangleFounder.png';

const Founder = () => {
  const Background = styled.div`
    display:flex;
    align-items:center;
    background-image: url('${BackgroundPath}');
    height: 100vh;
    width:100%;
    background-repeat: no-repeat;
    background-size: 100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: center;
    padding-top:10rem;
    @media (max-width: 767px) {
      background-image:none;
      background-color:#000;
      height:auto;
    }
  `;

  const FounderTitle = styled.h3`
    text-transform: uppercase;
    font-size: 3rem;
    color: #fafafa;
    font-weight: 900;
  `;

  const FounderText = styled.p`
    font-weight: 500;
    font-size: 1.5rem;
    color: #fafafa;
  `;
  const FounderImg = styled.img`
    width: 80%;
  `;
  return (
    <Container fluid>
      <Background>
        <Col className='px-0' md={{ span: 10, offset: 1 }}>
          <Row>
            <FounderTitle>
              Conheça o idealizador <br />
              do betclub
            </FounderTitle>
            <FounderText>
              Juliano Fontes é o maior especialista em Apostas Esportivas do
              país, sendo um dos primeiros a atuar neste mercado fora da Europa.
              Com experiência de 10 anos no assunto e profissional nesse ramo há
              8 anos, chegando a faturar até 30 mil reais por mês como Apostador
              Esportivo.
            </FounderText>
          </Row>
          <Row>
            <Col
              className='px-0 d-flex flex-column justify-content-around'
              md={{ span: 5 }}
            >
              <FounderText>
                Autor do livro best seller Invista em Futebol e fundador do
                maior portal de estatísticas de futebol do Brasil, o
                InvestimentoFutebol.com. Ele desenvolveu métodos didáticos de
                ensino dessa metodologia. E hoje, além de ser o principal trader
                esportivo do Brasil, é também o principal instrutor dessa área.
              </FounderText>
              <FounderText>
                Antes, Juliano Fontes era trader da bolsa de valores, mas devido
                ao seu sucesso com apostas no esporte, decidiu em atuar apenas
                no mercado esportivo. Já recebeu diversos prêmios como maior
                investidor em casas de apostas como FantasticWin e Betmotion.
                Além disso, foi o maior investidor da Betfair no mundo em 2014.
              </FounderText>
            </Col>
            <Col md={{ span: 6, offset: 1 }}>
              <FounderImg src={FounderPath} />
            </Col>
          </Row>
        </Col>
      </Background>
    </Container>
  );
};

export default Founder;
