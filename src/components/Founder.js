import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import BackgroundPath from '../images/Rectangle 119.png';
import FounderPath from '../images/RectangleFounder.png';
import CBN from '../images/cbn.png';
import Epoca from '../images/epoca.png';
import Jp from '../images/jp.png';
import R7 from '../images/r7.png';
import Valor from '../images/valor.png';
import RadioGlobo from '../images/radioglobo.png';
import ModalEntrevistaCBN from '../components/ModalEntrevistaCBN';
import ModalEntrevistaJP from '../components/ModalEntrevistaJP';
import ModalEntrevistaRG from '../components/ModalEntrevistaRG';
import ModalEntrevistaR7 from '../components/ModalEntrevistaR7';
import ModalEntrevistaEpoca from '../components/ModalEntrevistaEpoca';
import ModalEntrevistaValor from '../components/ModalEntrevistaValor';

const Founder = () => {
  const [isModalOpenCBN, setIsModalOpenCBN] = useState(false);
  const [isModalOpenJP, setIsModalOpenJP] = useState(false);
  const [isModalOpenRG, setIsModalOpenRG] = useState(false);
  const [isModalOpenR7, setIsModalOpenR7] = useState(false);
  const [isModalOpenEpoca, setIsModalOpenEpoca] = useState(false);
  const [isModalOpenValor, setIsModalOpenValor] = useState(false);

  const Background = styled.div`
    display:flex;
    align-items:center;
    background-image: url('${BackgroundPath}');
    width:100%;
    background-repeat: no-repeat;
    background-size: 100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: center;
    padding-top:7rem;
    height: auto;
    @media (max-width: 767px) {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      height:auto;
    }
  `;

  const FounderTitle = styled.h3`
    text-transform: uppercase;
    font-size: 3rem;
    color: #fafafa;
    font-weight: 900;
    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 26px;
      text-align: center;
    }
  `;

  const FounderText = styled.p`
    font-weight: 500;
    font-size: 1.4rem;
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

  const FounderImg = styled.img`
    width: 80%;
    position: relative;
  `;

  const LogoImg = styled.img`
    cursor: pointer;
  `;

  const LogosContainer = styled.div`
    border-top: 2px solid rgba(252, 255, 44, 0.3);
    border-bottom: 2px solid rgba(252, 255, 44, 0.3);
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
    width: 100%;
    padding: 1.5rem;
  `;

  const RowContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
  `;
  const Underline = styled.span`
    text-decoration: none;
    border-bottom: 6px solid #fae700;
    padding-bottom: 5px;
    border-radius: 10%;
    cursor: pointer;

    @media (max-width: 767px) {
      border: none;
    }
  `;

  return (
    <Container className='p-0' fluid>
      <ModalEntrevistaCBN
        isModalOpenCBN={isModalOpenCBN}
        onHide={() => setIsModalOpenCBN(false)}
      />
      <ModalEntrevistaJP
        isModalOpenJP={isModalOpenJP}
        onHide={() => setIsModalOpenJP(false)}
      />
      <ModalEntrevistaRG
        isModalOpenRG={isModalOpenRG}
        onHide={() => setIsModalOpenRG(false)}
      />
      <ModalEntrevistaR7
        isModalOpenR7={isModalOpenR7}
        onHide={() => setIsModalOpenR7(false)}
      />
      <ModalEntrevistaEpoca
        isModalOpenEpoca={isModalOpenEpoca}
        onHide={() => setIsModalOpenEpoca(false)}
      />
      <ModalEntrevistaValor
        isModalOpenValor={isModalOpenValor}
        onHide={() => setIsModalOpenValor(false)}
      />
      <Background>
        <Col md={{ span: 10, offset: 1 }}>
          <RowContainer>
            <FounderTitle className='pb-4'>
              Conheça o idealizador <br />
              <Underline>do </Underline>betclub
            </FounderTitle>
            <FounderText>
              Juliano Fontes é o maior especialista em Apostas Esportivas do
              país, sendo um dos primeiros a atuar neste mercado fora da Europa.
              Com experiência de 10 anos no assunto e profissional nesse ramo há
              8 anos, chegando a faturar até 30 mil reais por mês como Apostador
              Esportivo.
            </FounderText>
          </RowContainer>
          <RowContainer>
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
            <Col
              className='d-flex justify-content-center'
              xs={12}
              md={{ span: 7 }}
            >
              <FounderImg src={FounderPath} />
            </Col>
          </RowContainer>
        </Col>
      </Background>
      <LogosContainer>
        <Col xs={4}>
          <LogoImg src={CBN} onClick={() => setIsModalOpenCBN(true)} />
        </Col>
        <Col xs={4}>
          <LogoImg src={Epoca} onClick={() => setIsModalOpenEpoca(true)} />
        </Col>
        <Col xs={4}>
          <LogoImg src={Jp} onClick={() => setIsModalOpenJP(true)} />
        </Col>
        <Col className='pt-3' xs={4}>
          <LogoImg src={R7} onClick={() => setIsModalOpenR7(true)} />
        </Col>
        <Col className='pt-3' xs={4}>
          <LogoImg src={RadioGlobo} onClick={() => setIsModalOpenRG(true)} />
        </Col>
        <Col className='pt-3' xs={4}>
          <LogoImg src={Valor} onClick={() => setIsModalOpenValor(true)} />
        </Col>
      </LogosContainer>
    </Container>
  );
};

export default Founder;
