import React from 'react';
import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';
import eSports from '../images/eSports.svg';
import security from '../images/security.svg';

const EsportsFuture = () => {
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

  const EsportsFutureTitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 3rem;
    color: #fafafa !important;
    text-transform: uppercase;
    text-align: left;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  `;

  const EsportsFutureText = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1rem;
    color: #fafafa;

    @media (max-width: 767px) {
      font-size: 0.8rem;
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
          <Col md={{ span: 7, offset: 1 }} xs={{ span: 10, offset: 1  }}>
            <div className='mb-5 mt-5'>
              <EsportsFutureTitle>
                E-SPORTS: O FUTURO DAS APOSTAS ONLINE
              </EsportsFutureTitle>
              <EsportsFutureText>
                Com mais de 90% dos campeonatos de Futebol  cancelados, surgiu
                uma NOVA ONDA nas Apostas Esportivas. Sem a necessidade de
                encontros presenciais, os Esportes Eletrônicos se tornaram a
                escolha número 1 dos apostadores que não tem medo de mudanças.
              </EsportsFutureText>
            </div>

            <div className='pt-5'>
              <EsportsFutureTitle>
                SEGURANÇA: NINGUÉM VAI TOCAR NO SEU DINHEIRO
              </EsportsFutureTitle>
              <EsportsFutureText>
                Você mesmo fará seus investimentos, direto nas plataformas de
                Apostas. Ninguém, além de você, tocará no seu dinheiro. NÃO É
                NECESSÁRIO transferir qualquer quantia por nós. Nosso trabalho é
                INDICAR as melhores oportunidades para você mesmo realizar suas
                operações.
              </EsportsFutureText>
            </div>
          </Col>
          <Col md={{ span: 2, offset: 1 }} xs={11}>
            <SvgImg src={eSports} />
            <SvgImg src={security} />
          </Col>
        </GeneralWrapper>
      </Container>
    </Background>
  );
};

export default EsportsFuture;
