import React, { useState } from 'react';
import styled from 'styled-components';
import LogoPath from '../images/image 14.png';
import { Col } from 'react-bootstrap';
import ModalCallToAction from '../components/ModalCallToAction';

const Navbar = () => {
  const [isModalOpenCallToAction, setIsModalOpenCallToAction] = useState(false);

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
    color: #fff !important;
    font-weight: bold;
    z-index: 2;
    padding-bottom: 4px;

    &:hover {
      text-decoration: none;
      border-bottom: 4px solid rgba(250, 231, 0, 0.5);
      border-radius: 10%;
      cursor: pointer;
      padding-bottom: 0;
    }
  `;

  const MenuItemYellow = styled.a`
    color: rgb(250, 231, 0) !important;
    font-weight: bold;
    z-index: 2;

    &:hover {
      text-decoration: none;
      border-bottom: 4px solid #fff;
      border-radius: 10%;
      cursor: pointer;
    }
  `;

  const ItemsWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;

  const Logo = styled.img``;
  return (
    <NavbarWrapper>
      <ModalCallToAction
        isModalOpenCallToAction={isModalOpenCallToAction}
        onHide={() => setIsModalOpenCallToAction(false)}
      />
      <Col className='ml-5' md={1}>
        <Logo src={LogoPath} />
      </Col>
      <Col className='d-flex direction-row' md={{ offset: 1, span: 9 }}>
        <ItemsWrapper>
          <MenuItem href='#callToAction'>INÍCIO</MenuItem>
          <MenuItem href='#aIAnalysis'>JOGOS</MenuItem>
          <MenuItem href='#results'>RESULTADOS</MenuItem>
          <MenuItem href='#approval'>DEPOIMENTOS</MenuItem>
          <MenuItem href='#faq'>FAQ</MenuItem>
          <MenuItemYellow onClick={() => setIsModalOpenCallToAction(true)}>
            ASSINAR
          </MenuItemYellow>
        </ItemsWrapper>
      </Col>
    </NavbarWrapper>
  );
};
export default Navbar;
