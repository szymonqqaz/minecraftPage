import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import MenuPhone from '../MenuPhone/MenuPhone';

const MainWrapper = styled.nav`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.white};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Hamburger = styled.button`
  height: 5px;
  width: 35px;
  position: relative;
  background: ${({ theme }) => theme.black};
  border: none;
  margin-right: 15px;

  ::before,
  ::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    display: block;
    background: ${({ theme }) => theme.black};
  }

  ::before {
    top: 13px;
  }

  ::after {
    top: -13px;
  }
`;

const Text = styled.h1`
  font-size: ${({ theme }) => theme.size.m};
  color: ${({ theme }) => theme.green};
  font-weight: ${({ theme }) => theme.weight.b};
  margin-left: 15px;
`;

const NavBarPhone = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          craft {
            stronaGlownas {
              ipSerwera
            }
          }
        }
      `}
      render={({ craft: { stronaGlownas } }) => (
        <>
          <MenuPhone isMenuOpen={isMenuOpen} />
          <MainWrapper>
            <Text>{stronaGlownas[0].ipSerwera}</Text>
            <Hamburger onClick={toggleMobileMenu} isMenuOpen={isMenuOpen} />
          </MainWrapper>
        </>
      )}
    />
  );
};

export default NavBarPhone;
