import React from 'react';
import styled from 'styled-components';
import LogoPath from '../images/image 14.png';
import { Col } from 'react-bootstrap';

const Navbar = () => {
  const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    z-index: 2;

    @media (max-width: 767px) {
      display: none;
      padding: 0;
    }
  `;

  const MenuItem = styled.a`
    color: white !important;
    font-weight: bold;
    z-index: 2;

    &:hover {
      text-decoration: none;
      border-bottom: 4px solid rgba(250, 231, 0, 0.5);
      padding-bottom: 5px;
      border-radius: 10%;
      cursor: pointer;
    }
  `;

  const ItemsWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;

  const Logo = styled.img``;
  return (
    <NavbarWrapper>
      <Col className='ml-5' md={1}>
        <Logo src={LogoPath} />
      </Col>
      <Col className='d-flex direction-row' md={{ offset: 1, span: 9 }}>
        <ItemsWrapper>
          <MenuItem href='#callToAction'>INÍCIO</MenuItem>
          <MenuItem href='#aIAnalysis'>JOGOS</MenuItem>
          <MenuItem href='#tips'>RESULTADOS</MenuItem>
          <MenuItem href='#approval'>DEPOIMENTOS</MenuItem>
          <MenuItem href='#faq'>FAQ</MenuItem>
        </ItemsWrapper>
      </Col>
    </NavbarWrapper>
  );
};
export default Navbar;
