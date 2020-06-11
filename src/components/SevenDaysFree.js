import React from 'react';
import styled from 'styled-components';
import BackgroundPath from '../images/Rectangle 111.png';
import { Col, Container, Row } from 'react-bootstrap';
import GermanPoliceImg from '../images/GermanPolice.png';

const SevenDaysFree = () => {
  const Background = styled.div`
    display:flex;
    background-image: url('${BackgroundPath}');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 95vh;
    padding-top: 2rem;
    
    @media (max-width: 767px) {
      background-image:none;
      background-color:#000;
      margin:  5rem 0;
      height: auto;
    }
  `;

  const SevenDaysTitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 3rem;
    color: #fafafa !important;
    text-transform: uppercase;
    margin-bottom: 3rem;

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

  const SevenDaysText = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1.5rem;
    color: #fafafa;

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

  const GermanPolice = styled.img`
    width: 90%;
    display: block;
    margin: auto 0;
    @media (max-width: 767px) {
      display: none;
    }
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
    <Background>
      <Container className='p-0' fluid>
        <Row className='w-100 m-0'>
          <Col
            className='d-flex flex-column justify-content-center'
            md={{ offset: 1, span: 6 }}
          >
            <SevenDaysTitle>
              TESTE SEM COMPROMISSO
              <br /> <Underline>POR</Underline> 7 DIAS
            </SevenDaysTitle>
            <SevenDaysText>
              Visando tirar todo o peso das suas costas e remover os obstáculos
              que poderiam te desencorajar de tentar aplicar o nosso método, nós
              optamos por incluir nessa oferta uma garantia incondicional de 7
              dias.
            </SevenDaysText>
            <SevenDaysText>
              Ou seja, se por qualquer motivo você não ficar 100% SATISFEITO com
              o Betclub dos Investidores, basta entrar em contato com a nossa
              equipe dentro de 7 dias que nós devolvemos o seu dinheiro.
            </SevenDaysText>
            <SevenDaysText>Simples e direto.</SevenDaysText>
          </Col>
          <Col md={{ span: 3, offset: 2 }}>
            <GermanPolice src={GermanPoliceImg} />
          </Col>
        </Row>
      </Container>
    </Background>
  );
};

export default SevenDaysFree;
