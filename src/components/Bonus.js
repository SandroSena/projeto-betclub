import React from 'react';
import styled from 'styled-components';
import Checkmark from '../images/checkmark.svg';
import { Col, Container } from 'react-bootstrap';
import Fortnite from '../images/s4-wallpaper.png';

const Bonus = () => {
  const Background = styled.div`
    background-color: #000;
    height: 80vh;
    display: flex;
    background-image: url('${Fortnite}');
  background-size:100% 100%;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 767px) {
      justify-content: center;
      height:auto;
    }
  `;

  const CTASuperTitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 3rem;
    color: #fafafa !important;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  `;
  const CTATitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 2rem;
    color: #fafafa !important;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 1rem;
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
    font-weight: 500;
    font-size: 1.5rem;
    color: #fafafa;

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  `;
  const CTAText = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1.2rem;
    color: #fafafa;

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  `;

  const BonusContainer = styled.div`
    padding: 2rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.88));
    border: 2px solid rgba(252, 255, 44, 0.3);
    box-shadow: 0px 4px 40px rgba(250, 231, 0, 0.2);
  `;

  const ClassTitle = styled.span`
    margin-left: 1rem;
    color: white !important;
  `;

  const ClassItem = styled.div`
    margin: 1rem 0;
  `;
  const Button = styled.button`
    background-color: transparent;
    color: yellow;
    border: 3px solid yellow;
    text-transform: uppercase;
    padding: 0.5rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-left: 0.1rem;
  `;

  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  `;
  return (
    <Container className='p-0' fluid>
      <Background>
        <Col md={{ offset: 1, span: 10 }}>
          <CTASuperTitle>
            IDEAL PARA QUEM ESTÁ COMEÇANDO E NÃO QUER FICAR PARA TRÁS
          </CTASuperTitle>
        </Col>
        <ContentWrapper>
          <Col className='h-75' xs={12} md={{ span: 5, offset: 1 }}>
            <TextContainer>
              <CTASuperText>
                Membros iniciantes nas Apostas Online ganharão um pacote de
                boas-vindas com TUDO que precisam para começar hoje mesmo. Por
                outro lado, se familiarizado com o Mercado, conte com análises
                automáticas diariamente.
              </CTASuperText>
              <div>
                <CTATitle>DEZENAS DE ANÁLISES POR MÊS</CTATitle>
                <CTAText>
                  Se você tem disciplina para COPIAR E COLAR as recomendações
                  dos nossos analistas de forma consistente, logo você será
                  capaz de tirar seu sustento e realizar os seus sonhos através
                  deste negócio.
                </CTAText>
              </div>
              <div>
                <CTATitle>COMECE COM MENOS DE R$ 100 </CTATitle>
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
              <CTATitle>BÔNUS: CURSO INTRODUTÓRIO</CTATitle>
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
              <Button>Adquira Agora</Button>
            </BonusContainer>
          </Col>
        </ContentWrapper>
      </Background>
    </Container>
  );
};

export default Bonus;
