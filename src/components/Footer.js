import React from 'react';
import styled from 'styled-components';
import LogoPath from '../images/image 14.png';
import { Col } from 'react-bootstrap';

const Footer = () => {
  const FooterWrapper = styled.div`
    height: 10rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 767px) {
      height: auto;
      flex-direction: column;
      padding: 1rem;
      justify-content: center;
    }
  `;
  const Warning = styled.span`
    text-align: justify;
    font-size: 1rem;
    color: #fafafa;
    font-size: 1rem;
    @media (max-width: 767px) {
      font-size: 0.7rem;
    }
  `;
  const WarningWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
  `;
  const Logo = styled.img``;

  return (
    <FooterWrapper>
      <Col className='ml-3' md={1}>
        <Logo src={LogoPath} />
      </Col>
      <Col className='h-100' xs={12} md={{ offset: 1, span: 8 }}>
        <WarningWrapper>
          <Warning>
            * Lucros passados não são garantia de lucros futuros e oscilações
            são comuns. Nossa taxa de acerto é bem constante e quando acertamos
            ganhamos muito mais do que perdemos. Mas é impossível negar que todo
            investimento, não importa qual seja, envolve riscos (menores ou
            maiores de acordo com o tipo de investimento) e portanto podem
            causar perdas também. Para você se blindar ao máximo disso, basta
            seguir a nossa metodologia de gestão de banca.
          </Warning>
          <Warning>Copyright © 2020 FuteInvest</Warning>
        </WarningWrapper>
      </Col>
    </FooterWrapper>
  );
};

export default Footer;
