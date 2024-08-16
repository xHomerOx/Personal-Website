'use client'
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 40px;
  background-color: #444;
  color: white;
  text-align: center;
  width: 100%;
  margin-top: 20px;
`;

const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <h2>About Me</h2>
      <p>Page in construction, updated content will be published here.</p>
    </AboutContainer>
  );
};

export default About;