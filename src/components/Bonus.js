import React from 'react';
import styled from 'styled-components';
import Checkmark from '../images/checkmark.svg';
import { Col, Container } from 'react-bootstrap';
import Fortnite from '../images/fortnite.png';

const Bonus = () => {
  const Background = styled.div`
    background-color: #000;
    display: flex;
    background-image: url('${Fortnite}');
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    height: 110vh;
    width:100%;
    background-size: 100% 100%;
    
    @media (max-width: 767px) {
      justify-content: center;
      background-repeat: no-repeat;
      background-size: contain;
      height: auto;
    }
  `;

  const CTASuperTitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 3rem;
    color: #fff !important;
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
  const CTATitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 2rem;
    color: #fafafa !important;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      font-size: 20px;
      line-height: 26px;
      /* or 130% */

      text-align: center;

      color: #ffffff;
    }
  `;

  const TextContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;
  const CTASuperText = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-size: 24px;
    line-height: 32px;
    color: #fff;

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
  const CTAText = styled.p`
    font-family: Montserrat;
    font-size: 18px;
    line-height: 32px;
    color: #fff;

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

  const BonusContainer = styled.div`
    padding: 2rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.88));
    border: 2px solid rgba(252, 255, 44, 0.3);
    box-shadow: 0px 4px 40px rgba(250, 231, 0, 0.2);
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: baseline;
    }
  `;

  const ClassTitle = styled.span`
    margin-left: 1rem;
    color: white !important;
  `;

  const ClassItem = styled.div`
    margin: 1rem 0;

    @media (max-width: 767px) {
      margin: 0.5rem;
    }
  `;
  const Button = styled.a`
    background-color: transparent;
    color: rgb(250, 231, 0) !important;
    border: 3px solid yellow;
    text-transform: uppercase;
    padding: 0.5rem;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 767px) {
      margin-left: auto;
      margin-right: auto;
    }
  `;

  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  `;

  const Underline = styled.span`
    text-decoration: none;
    border-bottom: 6px solid #fae700;
    padding-bottom: 5px;
    border-radius: 10%;
    cursor: pointer;
  `;
  return (
    <Container className='p-0' fluid>
      <Background>
        <ContentWrapper>
          <Col md={{ offset: 1, span: 10 }}>
            <CTASuperTitle>
              IDEAL PARA QUEM ESTÁ COMEÇANDO
              <br /> <Underline>E N</Underline>ÃO QUER FICAR PARA TRÁS
            </CTASuperTitle>
          </Col>
          <Col className='h-75' xs={12} md={{ span: 5, offset: 1 }}>
            <TextContainer>
              <CTASuperText>
                Membros iniciantes nas Apostas Online ganharão um pacote de
                boas-vindas com <strong>TUDO</strong> que precisam para começar
                hoje mesmo. Por outro lado, se familiarizado com o Mercado,
                conte com análises automáticas diariamente.˝
              </CTASuperText>
              <div>
                <CTATitle className='pt-3'>
                  DEZENAS DE ANÁLISES POR MÊS
                </CTATitle>
                <CTAText>
                  Com cerca de 4 análises de jogos por dia, você terá um número
                  de oportunidades fora da curva para multiplicar os seus
                  investimentos. Um volume de indicações ideal para você não
                  deixar nenhuma oportunidade passar.
                </CTAText>
              </div>
              <div>
                <CTATitle className='pt-3'>
                  COMECE COM MENOS DE R$ 100{' '}
                </CTATitle>
                <CTAText>
                  Não existe um limite mínimo de dinheiro para ingressar nesse
                  mercado. Nossa recomendação é investir R$ 500 a R$ 1.000 para
                  ter retornos agressivos. Mas fica a seu critério o quanto você
                  deseja investir. Aporte a quantia que te deixa confortável.
                </CTAText>
              </div>
            </TextContainer>
          </Col>
          <Col xs={12} md={{ span: 5 }}>
            <BonusContainer>
              <CTATitle className='pb-5'>
                <Underline>BÔNUS</Underline>: CURSO INTRODUTÓRIO
              </CTATitle>
              <CTAText>
                40 rápidos minutos que vão te permitir entender os conceitos
                chaves do negócio, além de pontos importantes para garantir seu
                aproveitamento dentro do club.
              </CTAText>
              <ClassItem>
                <img src={Checkmark} alt='Checkmark' />
                <ClassTitle>Aula 1 – Boas Vindas</ClassTitle>
              </ClassItem>
              <ClassItem>
                <img src={Checkmark} alt='Checkmark' />
                <ClassTitle>Aula 2 – Bônus de R$ 120,00</ClassTitle>
              </ClassItem>
              <ClassItem>
                <img src={Checkmark} alt='Checkmark' />
                <ClassTitle>Aula 3 – Funcionamento das operações</ClassTitle>
              </ClassItem>
              <ClassItem>
                <img src={Checkmark} alt='Checkmark' />
                <ClassTitle>Aula 4 – Operando na prática</ClassTitle>
              </ClassItem>
              <ClassItem>
                <img src={Checkmark} alt='Checkmark' />
                <ClassTitle>Aula 5 – Dúvidas frequentes</ClassTitle>
              </ClassItem>
              <ClassItem>
                <img src={Checkmark} alt='Checkmark' />
                <ClassTitle>Aula 6 – Suporte</ClassTitle>
              </ClassItem>
              <div className='pt-5'>
                <Button href='#info-container'>Adquira Agora</Button>
              </div>
            </BonusContainer>
          </Col>
        </ContentWrapper>
      </Background>
    </Container>
  );
};

export default Bonus;
