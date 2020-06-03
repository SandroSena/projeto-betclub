import React from 'react';
import styled from 'styled-components';
import BackgroundPath from '../images/Rectangle 111.png';
import { Col, Container } from 'react-bootstrap';
import GermanPoliceImg from '../images/GermanPolice.png';

const SevenDaysFree = () => {
  const Background = styled.div`
    display:flex;
    background-image: url('${BackgroundPath}');
    height: 100vh;
    width:100%;
    background-repeat: no-repeat;
    background-size: 100%;
    
    @media (max-width: 767px) {
      background-image:none;
      background-color:#000;
      height: auto;
    }
  `;

  const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
  `;

  const SevenDaysTitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 3rem;
    color: #fafafa !important;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  `;

  const SevenDaysText = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1.5rem;
    color: #fafafa;

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  `;

  const GermanPolice = styled.img`
    width: 20%;

    @media (max-width: 767px) {
      display: none;
    }
  `;

  return (
    <Background>
      <Container className='p-0' fluid>
        <Wrapper>
          <Col md={{ span: 7, offset: 1 }} xs={11} className='pt-5'>
            <SevenDaysTitle>TESTE SEM COMPROMISSO POR 7 DIAS</SevenDaysTitle>
          </Col>
          <Col md={{ span: 7, offset: 1 }} xs={11} className='pt-5'>
            <SevenDaysText>
              Visando tirar todo o peso das suas costas e remover os obstáculos
              que poderiam te desencorajar de tentar aplicar o nosso método, nós
              optamos por incluir nessa oferta uma garantia incondicional de 7
              dias.
            </SevenDaysText>
            <SevenDaysText className='pt-5'>
              Ou seja, se por qualquer motivo você não ficar 100% SATISFEITO com
              o Club dos Investidores, basta entrar em contato com a nossa
              equipe dentro de 7 dias que nós devolvemos o seu dinheiro.
            </SevenDaysText>
            <SevenDaysText className='pt-5'>Simples e direto.</SevenDaysText>
          </Col>
          <GermanPolice src={GermanPoliceImg} />
        </Wrapper>
      </Container>
    </Background>
  );
};

export default SevenDaysFree;
