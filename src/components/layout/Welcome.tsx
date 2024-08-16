'use client'
import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Welcome: React.FC = () => {
    return (
        <WelcomeContainer>
          <h2>Welcome to my new Website Application</h2>
          <p>We will update content as soon as possible.</p>
        </WelcomeContainer>
    );
};

export default Welcome;