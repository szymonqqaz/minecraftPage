import React, { useState } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import MenuPhone from '../MenuPhone/MenuPhone';
import Hamburger from '../Hamburger/Hamburger';

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

  ${({ theme }) => theme.mq.desktopS} {
    display: none;
  }
`;

const Text = styled.h1`
  font-size: ${({ theme }) => theme.size.m};
  color: ${({ theme }) => theme.green};
  font-weight: ${({ theme }) => theme.weight.b};
  margin-left: 15px;
`;

// eslint-disable-next-line react/prop-types
const NavBarPhone = ({ heightAllSecitons }) => {
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
          <MenuPhone
            isMenuOpen={isMenuOpen}
            heightAllSecitons={heightAllSecitons}
            send={toggleMobileMenu}
          />
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
