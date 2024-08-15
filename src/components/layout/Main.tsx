'use client'
import React from 'react';
import { useAppContext } from '@/context/_AppContext';
import styled from 'styled-components';

const MainContainer = styled.main`
  background-color: #000;
  color: white;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Main: React.FC = () => {
  return (
    <MainContainer>
      <h2>Welcome to my new Website Application</h2>
      <p>We will update content as soon as possible.</p>
    </MainContainer>
  );
};

export default Main;