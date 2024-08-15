'use client'
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Nav = styled.nav`
  a {
    color: white;
    text-decoration: none;
    margin: 0 15px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>xHomerOx Web Application</Title>
      <Nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;