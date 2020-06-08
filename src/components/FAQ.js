import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Col, Container } from 'react-bootstrap';
import BackgroundPath from '../images/Rectangle 121.png';

const FAQ = () => {
  const [questionOpen1, setQuestionOpen1] = useState(true);
  const [questionOpen2, setQuestionOpen2] = useState(false);
  const [questionOpen3, setQuestionOpen3] = useState(false);
  const [questionOpen4, setQuestionOpen4] = useState(false);
  const [questionOpen5, setQuestionOpen5] = useState(false);
  const [questionOpen6, setQuestionOpen6] = useState(false);
  const [questionOpen7, setQuestionOpen7] = useState(false);

  useEffect(() => {
    console.log(questionOpen1);
  }, [questionOpen1]);

  const Background = styled.div`
    background-color: #000;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-image: url('${BackgroundPath}');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    @media (max-width: 767px) {
      justify-content: center;
      height: auto;
      background-image: none;
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
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    @media (max-width: 767px) {
      font-size: 1rem;
    }
  `;
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
    cursor: pointer;
  `;

  const AnswerWrapper = styled.div`
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    margin: 1rem 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  `;

  const Answer = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;

    color: #ffffff;
  `;
  const Underline = styled.span`
    text-decoration: none;
    border-bottom: 6px solid #fae700;
    padding-bottom: 5px;
    border-radius: 10%;
    cursor: pointer;
    @media (max-width: 767px) {
      display: none;
    }
  `;

  const questionsData = [
    {
      question:
        'O que preciso entender sobre o mercado de apostas esportivas para seguir estas análises?',
      answer: [
        'Entrando para o Club você receberá todo o pacote de treinamentos básicos para efetuar suas operações, mesmo que nunca tenha feito algo parecido. Para começar a lucrar a partir das análises, tudo o que você precisa é:',

        '1. Cadastrar-se no site recomendado',
        '2. Assistir o nosso mini-curso',
        '3. Entrar para o nosso grupo do Telegram e seguir as dicas de apostas!',
      ],
      open: questionOpen1,
      handleClick: () =>
        setQuestionOpen1(() => {
          setQuestionOpen2(false);
          setQuestionOpen3(false);
          setQuestionOpen4(false);
          setQuestionOpen5(false);
          setQuestionOpen6(false);
          setQuestionOpen7(false);

          return !questionOpen1;
        }),
    },
    {
      question: 'Quantas análises vou receber por dia?',
      answer: ['Entre 1 e 2 por dia.'],
      open: questionOpen2,
      handleClick: () =>
        setQuestionOpen2(() => {
          setQuestionOpen1(false);
          setQuestionOpen3(false);
          setQuestionOpen4(false);
          setQuestionOpen5(false);
          setQuestionOpen6(false);
          setQuestionOpen7(false);

          return !questionOpen2;
        }),
    },
    {
      question: 'Quanto preciso para começar?',
      answer: [
        'A nossa recomendação é que você inicie com R$ 500 a R$ 1.000 para ter retornos mais significativos. Mas você pode começar com quanto quiser e se sentir confortável.',
      ],
      open: questionOpen3,
      handleClick: () =>
        setQuestionOpen3(() => {
          setQuestionOpen1(false);
          setQuestionOpen2(false);
          setQuestionOpen4(false);
          setQuestionOpen5(false);
          setQuestionOpen6(false);
          setQuestionOpen7(false);

          return !questionOpen3;
        }),
    },
    {
      question: 'Preciso assistir ao jogo ao vivo para fazer minha aposta?',
      answer: [
        'Definitivamente não. Basta ficar atento ao grupo de análises no telegram e fazer a sua aposta – de onde estiver – através de um aplicativo do seu celular para ter a chance multiplicar agressivamente os seus investimentos.',
      ],
      open: questionOpen4,
      handleClick: () =>
        setQuestionOpen4(() => {
          setQuestionOpen1(false);
          setQuestionOpen3(false);
          setQuestionOpen2(false);
          setQuestionOpen5(false);
          setQuestionOpen6(false);
          setQuestionOpen7(false);

          return !questionOpen4;
        }),
    },
    {
      question: 'Assinando agora, quando eu começo a receber análises?',
      answer: [
        'Dependendo da hora que você assinar, ainda hoje. O Club faz acompanhamento de jogos de domingo a domingo, em vários horários. Assim que entrar para o Club você receberá um passo a passo para começar imediatamente a lucrar com as análises dos nossos profissionais.',
      ],
      open: questionOpen5,
      handleClick: () =>
        setQuestionOpen5(() => {
          setQuestionOpen1(false);
          setQuestionOpen3(false);
          setQuestionOpen4(false);
          setQuestionOpen2(false);
          setQuestionOpen6(false);
          setQuestionOpen7(false);

          return !questionOpen5;
        }),
    },
    {
      question: 'Se eu não gostar, posso cancelar?',
      answer: [
        'Sim, você terá 30 dias para experimentar o Club, podendo obter lucros, aprender com os profissionais do Club e decidir se continua ou pede seu investimento de volta. Sem discussão, sem burocracia, sem qualquer taxa administrativa. Em até 30 dias, não ficou satisfeito? Nós cancelaremos sua assinatura.',
      ],
      open: questionOpen6,
      handleClick: () =>
        setQuestionOpen6(() => {
          setQuestionOpen1(false);
          setQuestionOpen3(false);
          setQuestionOpen4(false);
          setQuestionOpen5(false);
          setQuestionOpen2(false);
          setQuestionOpen7(false);

          return !questionOpen6;
        }),
    },
    {
      question: 'Vocês garantem lucros todos os meses?',
      answer: [
        'Lucros passados não são garantia de lucros futuros e oscilações são comuns. Nossa taxa de acerto é bem constante e quando acertamos ganhamos muito mais do que pardemos. Mas é impossível negar que todo investimento, não importa qual seja, envolve riscos (menores ou maiores de acordo com o tipo de investimento) e portanto podem causar perdas também. Para você se blindar ao máximo disso, basta seguir a nossa metodologia de gestão de banca.',
      ],
      open: questionOpen7,
      handleClick: () =>
        setQuestionOpen7(() => {
          setQuestionOpen1(false);
          setQuestionOpen3(false);
          setQuestionOpen4(false);
          setQuestionOpen5(false);
          setQuestionOpen6(false);
          setQuestionOpen2(false);

          return !questionOpen7;
        }),
    },
  ];
  return (
    <Container className='p-0 pt-5' fluid>
      <div id='faq' />

      <Background>
        <Col md={{ offset: 1, span: 11 }} className='pt-5'>
          <CTASuperTitle className='pb-5'>
            <Underline>Per</Underline>guntas Frequentes
          </CTASuperTitle>
          <QuestionsContainer className='pt-3'>
            {questionsData.map((question) => {
              return (
                <>
                  <QuestionWrapper onClick={question.handleClick}>
                    <Col xs={2} md={1}>
                      <OpenCloseIcon>{question.open ? '-' : '+'}</OpenCloseIcon>
                    </Col>
                    <Col md={10}>
                      <Question>{question.question}</Question>
                    </Col>
                  </QuestionWrapper>
                  <AnswerWrapper isOpen={question.open}>
                    {question.answer.map((answer) => (
                      <Answer>{answer}</Answer>
                    ))}
                  </AnswerWrapper>
                </>
              );
            })}
          </QuestionsContainer>
        </Col>
      </Background>
    </Container>
  );
};

export default FAQ;
