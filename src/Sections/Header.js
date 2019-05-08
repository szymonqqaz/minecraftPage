import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';
import './headerStyle.css';
import { StaticQuery, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import TitleSec from '../components/TitleSec/TitleSec';

library.add(faArrowDown);

const StyledImg = styled(Img)`
  height: 100%;

  ${({ theme }) => theme.mq.desktopS} {
    width: 100%;
    grid-column: 2/3;
    grid-row: 1/2;
    z-index: 9999;
  }
`;

const MainWrapper = styled.header`
  height: 100vh;
  width: 100%;

  ${({ theme }) => theme.mq.desktopS} {
    width: 94%;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 100vh 100vh;
  }

  ${({ theme }) => theme.mq.desktopB} {
    grid-template-columns: 35% 65%;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.mq.desktopS} {
    grid-column: 1/2;
    grid-row: 1/2;
    position: static;
    display: block;
  }
`;

const WrapperText = styled.div`
  background: ${({ theme }) => theme.transWhite};
  width: 100%;
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15vh;

  ${({ theme }) => theme.mq.desktopS} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 12vh auto 120px;
    height: 100vh;
    margin-top: 0;
  }
`;

const Text = styled.p`
  display: block;
  font-size: ${({ theme }) => theme.size.s};
  width: 88%;
  margin: 6% 6%;
  align-self: center;

  ${({ theme }) => theme.mq.minPhone} {
    font-size: ${({ theme }) => theme.size.m};
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.size.xm};
  }

  ${({ theme }) => theme.mq.desktopS} {
    grid-column: 1/2;
    grid-row: 2/3;
    font-size: ${({ theme }) => theme.size.xs};
    display: none;
  }

  ${({ theme }) => theme.mq.desktopB} {
    font-size: ${({ theme }) => theme.size.xm};
  }
`;

const TextDesktop = styled(Text)`
  display: none;

  ${({ theme }) => theme.mq.desktopS} {
    display: block;
  }
`;

const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.transWhite};
  width: 60%;
  height: 8vh;
  border-radius: 5px;
  margin-top: 25vh;
  font-size: ${({ theme }) => theme.size.xs};
  font-weight: ${({ theme }) => theme.weight.m};
  max-width: 280px;
  cursor: pointer;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.size.xm};
  }

  ${({ theme }) => theme.mq.desktopS} {
    display: none;
  }

  :hover {
    background: ${({ theme }) => theme.white};
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.size.s};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.size.xs};
  }
`;

const WrapperForTitle = styled.div`
  ${({ theme }) => theme.mq.desktopS} {
    grid-column: 1/2;
    grid-row: 1/2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SocialsText = styled.div`
  display: none;
  grid-column: 1/2;
  grid-row: 3/4;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-left: 90px;
  margin-right: 10px;
  font-size: ${({ theme }) => theme.size.m};

  ${({ theme }) => theme.mq.desktopS} {
    display: flex;
  }
`;

const Header = ({ image }) => (
  <StaticQuery
    query={graphql`
      query {
        craft {
          stronaGlownas {
            nazwaSerwera
            wiecej
            socialMedia
            rozwiniecieWiecej
          }
        }
      }
    `}
    render={({ craft: { stronaGlownas } }) => (
      <>
        <MainWrapper className="sec1">
          <StyledImg
            className="img"
            fluid={image.file.childImageSharp.fluid}
            alt="backgorund"
          />
          <Wrapper>
            <WrapperText>
              <WrapperForTitle>
                <TitleSec first>{stronaGlownas[0].nazwaSerwera}</TitleSec>
              </WrapperForTitle>
              <Text>{stronaGlownas[0].wiecej}</Text>
              <TextDesktop>{stronaGlownas[0].rozwiniecieWiecej}</TextDesktop>
              <SocialsText>{stronaGlownas[0].socialMedia}</SocialsText>
            </WrapperText>
            <Button>
              o serwerze <Icon icon="arrow-down" />
            </Button>
          </Wrapper>
        </MainWrapper>
      </>
    )}
  />
);

Header.propTypes = {
  image: PropTypes.element.isRequired,
};

export default Header;
