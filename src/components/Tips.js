import React from 'react';
import styled from 'styled-components';
import BackgroundPath from '../images/Group 532.png';
import { Container, Col } from 'react-bootstrap';
import csgo from '../images/ccsgo.png';
import dota2 from '../images/dota2.png';
import lol from '../images/lol.png';
import overwatch from '../images/overwatch.png';

const Tips = () => {
  const Background = styled.div`
    display:flex;
    align-items:center;
    background-image: url('${BackgroundPath}');
    height: 100vh;
    width:100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    @media (max-width: 767px) {
      background-image:none;
      background-color:#000;
      height: auto;
    }
  `;

  const TipsTitle = styled.h3`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 3rem;
    color: #fafafa !important;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  `;

  const ContainerImgs = styled.div`
    display: flex;
    width: 1028px;
    height: 540.19px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85));
    margin: 0 auto;
    border: 2px solid rgba(252, 255, 44, 0.3);

    box-shadow: 0px 4px 40px rgba(250, 231, 0, 0.2);

    @media (max-width: 767px) {
      width: 20rem;
      height: 50vh;
    }
  `;

  const WrapImgs = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  `;

  const SvgImg = styled.img`
    @media (max-width: 767px) {
      width: 8rem;
    }
  `;

  return (
    <Background>
      <div id='tips'/>

      <Container className='p-0' fluid>
        <Col md={{ span: 10, offset: 1 }} xs={11}>
          <TipsTitle className='pb-5'>
            Receba dicas
            <br /> de apostas para:
          </TipsTitle>
        </Col>
        <ContainerImgs>
          <WrapImgs>
            <SvgImg src={csgo} />
            <SvgImg src={dota2} />
          </WrapImgs>
          <WrapImgs>
            <SvgImg src={lol} />
            <SvgImg src={overwatch} />
          </WrapImgs>
        </ContainerImgs>
      </Container>
    </Background>
  );
};

export default Tips;
