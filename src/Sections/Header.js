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
`;

const MainWrapper = styled.header`
  height: 100vh;
  width: 100%;
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
`;

const WrapperText = styled.div`
  background: ${({ theme }) => theme.transWhite};
  width: 100%;
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15vh;
`;

const Text = styled.p`
  display: block;
  font-size: ${({ theme }) => theme.size.s};
  width: 88%;
  margin: 6% 6%;

  ${({ theme }) => theme.mq.minPhone} {
    font-size: ${({ theme }) => theme.size.m};
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
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.white};
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.size.s};
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
          }
        }
      }
    `}
    render={({ craft: { stronaGlownas } }) => (
      <>
        <MainWrapper>
          <StyledImg
            className="img"
            fluid={image.file.childImageSharp.fluid}
            alt="backgorund"
          />
          <Wrapper>
            <WrapperText>
              <div>
                <TitleSec>{stronaGlownas[0].nazwaSerwera}</TitleSec>
              </div>
              <Text>{stronaGlownas[0].wiecej}</Text>
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
