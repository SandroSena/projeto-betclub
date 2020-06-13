import React, { useState } from "react";
import styled from "styled-components";
import BackgroundPath from "../images/Group 531.png";
import BackgroundPathMobile from "../images/KatarinaMobile.png";
import LogoPath from "../images/image 14.png";
import ModalCallToAction from "../components/ModalCallToAction";
import FlexColumn from "./flex/FlexColumn";
import FlexRow from "./flex/FlexRow";
import Money from "./Money";

const CallToAction = () => {
  const [isModalOpenCallToAction, setIsModalOpenCallToAction] = useState(false);

  const Background = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    background-image: url('${BackgroundPath}');
    height: 100vh;
    max-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding-left: 80px;
    /* background-attachment: fixed; */

    @media (max-width: 767px) {
      padding: 20px;
      backGround-image: url('${BackgroundPathMobile}');
      background-color:#000;
      justify-content: space-between;
    }
  `;

  const NoBreak = styled.span`
    white-space: nowrap;
    @media (max-width: 767px) {
      white-space: pre-wrap;
    }
  `;

  const CTATitle = styled.h3`
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 65px;
    color: #fff !important;
    text-transform: uppercase;
    word-break: keep-all;
    padding: 0;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      font-size: 25px;
      line-height: 26px;
      text-align: center;
      /* padding: 80px 0 20px 0; */
    }
  `;

  const CTAText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    color: #fff !important;

    @media (max-width: 767px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      /* padding-bottom: 80px; */
    }
  `;

  const LoginButton = styled.a`
    background-color: transparent;
    color: rgb(250, 231, 0) !important;
    border: 3px solid yellow;
    text-transform: uppercase;
    padding: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    width: 45%;
    text-align: center;
    white-space: nowrap;

    @media (max-width: 767px) {
      margin-left: auto;
      margin-right: auto;
    }
  `;

  const Button = styled.a`
    background-color: rgb(250, 231, 0);
    color: rgba(1, 1, 1, 1) !important;
    border: 3px solid yellow;
    text-transform: uppercase;
    padding: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    width: 45%;
    text-align: center;
    white-space: nowrap;

    @media (max-width: 767px) {
      margin-left: auto;
      margin-right: auto;
    }
  `;

  const LogoImg = styled.img`
    display: none;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 767px) {
      display: block;
    }
  `;

  const FlexRowColumn = styled(FlexRow)`
    align-self: flex-start;
    @media (max-width: 767px) {
      width: 100%;
    }
    @media (min-height: 569px) and (max-height: 812px) {
      padding-bottom: 40px;
    }
  `;

  return (
    <Background id="callToAction">
      <ModalCallToAction
        isModalOpenCallToAction={isModalOpenCallToAction}
        onHide={() => setIsModalOpenCallToAction(false)}
      />
      <LogoImg src={LogoPath} />
      <FlexColumn>
        <FlexColumn>
          <CTATitle>
            <span style={{ display: "block" }}>
              Lucre de <Money value="1.000,00" /> a <Money value="2.000,00" />{" "}
            </span>
            <span>POR MÊS COM A EXPLOSÃO DOS</span>
          </CTATitle>
          <CTATitle>
            <NoBreak>E-SPORTS</NoBreak>
          </CTATitle>
        </FlexColumn>
        <FlexColumn>
          <CTAText>
            <NoBreak>
              Com apenas 15 minutos por dia, invista na modalidade que mais
              cresce no mundo das
            </NoBreak>{" "}
            apostas online
          </CTAText>
        </FlexColumn>
      </FlexColumn>
      <FlexRowColumn disableMobileColumn alignItems>
        <Button
          onClick={() => setIsModalOpenCallToAction(true)}
          style={{ width: 125, marginRight: 20 }}
        >
          Assine Já
        </Button>
        <LoginButton
          style={{ width: 125 }}
          href="https://betclubesports.club.hotmart.com/login"
          target="_blank"
        >
          Login
        </LoginButton>
      </FlexRowColumn>
    </Background>
  );
};

export default CallToAction;
