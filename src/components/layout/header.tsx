'use client'
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: radial-gradient(circle, #00bfff 0%, #282c34 100%);
  padding: 30px 50px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Nav = styled.nav`
  a {
    color: white;
    text-decoration: none;
    margin: 0 25px;
    font-size: 18px;
    position: relative;
    transition: color 0.3s;

    &:hover {
      color: #00bfff;
    }

    &::after {
      content: '';
      display: block;
      height: 3px;
      background: #00bfff;
      transition: width 0.3s;
      width: 0;
      position: absolute;
      left: 50%;
      bottom: -5px;
      transform: translateX(-50%);
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const Header: React.FC = () => {

  return (
    <HeaderContainer>
      <Title>xHomerOx WebApp</Title>
      <Nav>
        <a href="#about" style={{ color: 'white', margin: '0 10px' }}>Sobre Nosotros</a>
        <a href="#services" style={{ color: 'white', margin: '0 10px' }}>Servicios</a>
        <a href="#footer" style={{ color: 'white', margin: '0 10px' }}>Contacto</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;