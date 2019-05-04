import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

const MainWrapper = styled.div`
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

const MenuPhone = () => (
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
        <MainWrapper>
          <Text>{stronaGlownas[0].ipSerwera}</Text>
          <Hamburger />
        </MainWrapper>
      </>
    )}
  />
);

export default MenuPhone;
