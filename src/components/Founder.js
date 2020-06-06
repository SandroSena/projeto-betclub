import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import BackgroundPath from '../images/Rectangle 119.png';
import FounderPath from '../images/RectangleFounder.png';
import CBN from '../images/cbn.png';
import Epoca from '../images/epoca.png';
import Jp from '../images/jp.png';
import R7 from '../images/r7.png';
import RadioGlobo from '../images/radioglobo.png';
import ModalEntrevistaCBN from '../components/ModalEntrevistaCBN';
import ModalEntrevistaJP from '../components/ModalEntrevistaJP';
import ModalEntrevistaRG from '../components/ModalEntrevistaRG';
import ModalEntrevistaR7 from '../components/ModalEntrevistaR7';
import ModalEntrevistaEpoca from '../components/ModalEntrevistaEpoca';

const Founder = () => {
  const [isModalOpenCBN, setIsModalOpenCBN] = useState(false);
  const [isModalOpenJP, setIsModalOpenJP] = useState(false);
  const [isModalOpenRG, setIsModalOpenRG] = useState(false);
  const [isModalOpenR7, setIsModalOpenR7] = useState(false);
  const [isModalOpenEpoca, setIsModalOpenEpoca] = useState(false);

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
    padding-top:10rem;
    height: auto;
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

  const FounderText = styled.p`
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

  return (
    <Container className='p-0 pt-5' fluid>
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
      <Background>
        <Col className='' md={{ span: 10, offset: 1 }}>
          <RowContainer>
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
              md={{ span: 6, offset: 1 }}
            >
              <FounderImg src={FounderPath} />
            </Col>
          </RowContainer>
        </Col>
      </Background>
      <LogosContainer>
        <LogoImg src={CBN} onClick={() => setIsModalOpenCBN(true)} />
        <LogoImg src={Epoca} onClick={() => setIsModalOpenEpoca(true)} />
        <LogoImg src={Jp} onClick={() => setIsModalOpenJP(true)} />
        <LogoImg src={R7} onClick={() => setIsModalOpenR7(true)} />
        <LogoImg src={RadioGlobo} onClick={() => setIsModalOpenRG(true)} />
      </LogosContainer>
    </Container>
  );
};

export default Founder;
