import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import TitleSec from '../components/TitleSec/TitleSec';

const MainWrapper = styled.section`
  width: 100%;
  padding: 8vh 0 5vh;

  ${({ theme }) => theme.mq.desktopS} {
    width: 94%;
  }
`;

const FirstP = styled.p`
  width: 90%;
  margin: 5vh 5%;
  font-size: ${({ theme }) => theme.size.xs};

  ${({ theme }) => theme.mq.desktopBB} {
    font-size: ${({ theme }) => theme.size.m};
  }
`;

const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonA = styled.a`
  text-decoration: none;
  width: 210px;
  height: 60px;
  background: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.greenHover};
  }
`;

const ONas = () => (
  <StaticQuery
    query={graphql`
      query {
        craft {
          oNases {
            oSerwerze
            oItemShopie
          }
        }
      }
    `}
    render={({ craft: { oNases } }) => (
      <>
        <MainWrapper className="sec3">
          <TitleSec>O Nas</TitleSec>
          <FirstP>{oNases[0].oSerwerze}</FirstP>
          <FirstP>{oNases[0].oItemShopie}</FirstP>
          <WrapperButton>
            <ButtonA href="#">Item Shop</ButtonA>
          </WrapperButton>
        </MainWrapper>
      </>
    )}
  />
);

export default ONas;
