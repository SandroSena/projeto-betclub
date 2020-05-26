import React from 'react';
import styled from 'styled-components';
import LogoPath from '../images/image 14.png';
import { Row, Col } from 'react-bootstrap';

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

    /* @media (min-width: 1281px) {
      display: none;
    }

    @media (min-device-width: 768px) and (max-device-width: 1024px) {
      display: none;
    } */

    @media (max-width: 767px) {
      display: none;
      padding: 0;
    }
  `;

  const MenuItem = styled.a`
    color: white !important;
    font-weight: bold;

    &:hover {
      border-bottom: 4px solid rgba(250, 231, 0, 0.5);
      padding-bottom: 5px;
      border-radius: 10%;
      cursor: pointer;
    }
  `;

  const Logo = styled.img``;
  return (
    <NavbarWrapper>
      <Col className='ml-5' md={1}>
        <Logo src={LogoPath} />
      </Col>
      <Col className='d-flex direction-row' md={{ offset: 1, span: 8 }}>
        <Col>
          <MenuItem>INÍCIO</MenuItem>
        </Col>
        <Col>
          <MenuItem>SOBRE</MenuItem>
        </Col>
        <Col>
          <MenuItem>JOGOS</MenuItem>
        </Col>
        <Col>
          <MenuItem>DEPOIMENTOS</MenuItem>
        </Col>
        <Col md={3}>
          <MenuItem>PERGUNTAS FREQUENTES</MenuItem>
        </Col>
      </Col>
    </NavbarWrapper>
  );
};
export default Navbar;
