'use client'
import React from 'react';
import { useAppContext } from '@/context/_AppContext';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: radial-gradient(circle, #00bfff 0%, #282c34 100%);
  padding: 30px 50px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
`;

const TitleSection = styled.div`
  font-size: 16px;
  font-weight: bolder;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
`;

const NavSection = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
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

const CopyrightSection = styled.p`
  font-size: 14px;
  color: #ccc;
`;

const Footer: React.FC = () => {
    const { copyright } = useAppContext();
  
    return (
      <FooterContainer>
        <TitleSection>
          <h2>My Website</h2>
        </TitleSection>
        <NavSection>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </NavSection>
        <CopyrightSection>
          {copyright}
        </CopyrightSection>
      </FooterContainer>
    );
  };

export default Footer;