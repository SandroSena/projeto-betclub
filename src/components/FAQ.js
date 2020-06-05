import React from 'react';
import styled from 'styled-components';
import { Col, Container } from 'react-bootstrap';
import BackgroundPath from '../images/Rectangle 121.png';

const FAQ = () => {
  const Background = styled.div`
    background-color: #000;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-image: url('${BackgroundPath}');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    @media (max-width: 767px) {
      justify-content: center;
      height: auto;
      display:none;
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

  const OpenCloseIcon = styled.span`
    color: yellow !important;
    font-size: 3rem;
    font-weight: bold;
  `;
  const Question = styled.span`
    color: #fafafa;
    font-weight: bold;
  `;
  const Answer = styled.span``;
  const QuestionsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
  `;

  const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    border-top: 1px solid rgba(252, 255, 44, 0.1);
    border-bottom: 1px solid rgba(252, 255, 44, 0.1);
    box-shadow: 0px 0px 14px rgba(252, 255, 44, 0.2);
  `;

  const questionsData = [
    {
      question: 'Quanto preciso para começar?',
    },
    {
      question: 'Quantas análises vou receber por dia?',
    },
    {
      question: 'Preciso assistir o jogo ao vivo para fazer a minha aposta?',
    },
    {
      question: 'Assinando agora, quando eu começo a receber as análises?',
    },
    {
      question: 'Se eu não gostar, posso cancelar?',
    },
    {
      question: 'Vocês garantem lucros todos os meses?',
    },
  ];
  return (
    <Container className='p-0 pt-5' fluid>
      <Background>
        <Col md={{ offset: 1, span: 11 }} className='pt-5'>
          <CTASuperTitle>Perguntas Frequentes</CTASuperTitle>
        </Col>
        <Col md={{ offset: 1, span: 11 }}>
          <QuestionsContainer>
            {questionsData.map(question => {
              return (
                <QuestionWrapper>
                  <Col md={1}>
                    <OpenCloseIcon>+</OpenCloseIcon>
                  </Col>
                  <Col md={11}>
                    <Question>{question.question}</Question>
                  </Col>
                </QuestionWrapper>
              );
            })}
          </QuestionsContainer>
        </Col>
      </Background>
    </Container>
  );
};

export default FAQ;
