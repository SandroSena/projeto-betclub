import React from 'react';
import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';
import eSports from '../images/eSports.svg';
import security from '../images/security.svg';

const EsportsFuture = () => {
  const Background = styled.div`
    background-color: #000;
    height: 90vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 767px) {
      justify-content: center;
      height: auto;
    }
  `;

  const EsportsFutureTitle = styled.h3`
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 46px;
    text-transform: uppercase;
    color: #fff;
    text-align: left;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 26px;
      text-align: center;
    }
  `;

  const EsportsFutureText = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: #fff;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      margin-bottom: 2.5rem;
    }
  `;

  const GeneralWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
  `;

  const SvgImg = styled.img`
    @media (max-width: 767px) {
      display: none;
    }
  `;
  
  return (
    <Background>
      <Container className='p-0' fluid>
        <GeneralWrapper>
          <Col md={{ span: 5, offset: 2 }} xs={{ span: 10, offset: 1 }}>
            <div className='mb-5 mt-5'>
              <EsportsFutureTitle>
                E-SPORTS: O FUTURO DAS APOSTAS ONLINE
              </EsportsFutureTitle>
              <EsportsFutureText>
                Com mais de 90% dos campeonatos de Futebol cancelados, surgiu
                uma<strong> NOVA ONDA</strong> nas Apostas Esportivas. Sem a
                necessidade de encontros presenciais, os Esportes Eletrônicos se
                tornaram a escolha número 1 dos apostadores que não tem medo de
                mudanças.
              </EsportsFutureText>
            </div>

            <div>
              <EsportsFutureTitle>
                SEGURANÇA: NINGUÉM VAI TOCAR NO SEU DINHEIRO
              </EsportsFutureTitle>
              <EsportsFutureText>
                Você mesmo fará seus investimentos, direto nas plataformas de
                Apostas. Ninguém, além de você, tocará no seu dinheiro.{' '}
                <strong>NÃO É NECESSÁRIO</strong> transferir qualquer quantia
                por nós. Nosso trabalho é <strong>INDICAR</strong> as melhores
                oportunidades para você mesmo realizar suas operações.
              </EsportsFutureText>
            </div>
          </Col>
          <Col md={{ span: 2, offset: 1 }} xs={12}>
            <SvgImg src={eSports} />
            <SvgImg src={security} />
          </Col>
        </GeneralWrapper>
      </Container>
    </Background>
  );
};

export default EsportsFuture;
