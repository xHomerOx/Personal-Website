'use client'
import React from 'react';
import styled from 'styled-components';
import Welcome from './Welcome';
import About from './About';

const MainContainer = styled.main`
  background-color: #000;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Main: React.FC = () => {
  return (
    <MainContainer>
      <Welcome />
      <About />
    </MainContainer>
  );
};

export default Main;