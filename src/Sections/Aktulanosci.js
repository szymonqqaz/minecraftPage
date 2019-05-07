import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import TitleSec from '../components/TitleSec/TitleSec';
import undraw_text from '../images/undraw_text.svg';
import Icon from '../components/Icon/Icon';

const MainWrapper = styled.section`
  padding-top: 5vh;
  width: 100%;

  ${({ theme }) => theme.mq.desktopS} {
    padding-top: 12vh;
    width: 94%;
  }
`;

const WrapperArticleGrid = styled.div`
  display: block;

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.mq.desktopS} {
    margin-top: 10vh;
  }

  ${({ theme }) => theme.mq.desktopS} {
    margin-left: 0%;
  }
`;

const Article = styled.article`
  width: 90%;
  margin: 36px 0 0 5%;
  display: ${({ i }) => (i ? 'block' : 'none')};

  ${({ theme }) => theme.mq.desktopS} {
    width: 70%;
    justify-self: center;
    display: block;
  }
`;

const WrapperTitleData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.green};
`;

const Title = styled.span`
  font-weight: ${({ theme }) => theme.weight.b};
  font-size: ${({ theme }) => theme.size.xs};

  ${({ theme }) => theme.mq.desktopS} {
    font-size: ${({ theme }) => theme.size.m};
  }

  ${({ theme }) => theme.mq.desktopBB} {
    font-size: ${({ theme }) => theme.size.xm};
  }
`;

const Data = styled.span`
  color: ${({ theme }) => theme.green};

  ${({ theme }) => theme.mq.desktopS} {
    font-size: ${({ theme }) => theme.size.m};
  }

  ${({ theme }) => theme.mq.desktopBB} {
    font-size: ${({ theme }) => theme.size.xm};
  }
`;

const Text = styled.p`
  width: 100%;

  font-size: ${({ theme }) => theme.size.xs};

  ${({ theme }) => theme.mq.desktopBB} {
    font-size: ${({ theme }) => theme.size.m};
  }
`;

const WrapperShowMore = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.desktopS} {
    display: none;
  }
`;

const P = styled.p`
  color: ${({ theme }) => theme.green};
  cursor: pointer;
`;

const StyledIcon = styled(Icon)`
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
    grid-column: 2/3;
    grid-area: 1/2;
    transform: scale(0.3);
    position: relative;
    top: -20%;
    left: 7%;
    width: 10vh;
    height: 10vh;
  }

  ${({ theme }) => theme.mq.desktopS} {
    transform: scale(0.4);
    left: 20%;
    top: -60%;
  }
`;

const Aktualnosci = () => {
  const [isAktualnosciOpen, setAktualnosciState] = useState(false);

  const toggleAktualnosci = () => {
    setAktualnosciState(!isAktualnosciOpen);
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          craft {
            aktualnoscis {
              tytul
              data
              tresc
            }
          }
        }
      `}
      render={({ craft: { aktualnoscis } }) => (
        <>
          <MainWrapper>
            <TitleSec>Aktualności</TitleSec>
            <WrapperArticleGrid>
              <StyledIcon src={undraw_text} />
              {aktualnoscis.map((element, index) => (
                <Article
                  key={element.tytul}
                  i={index <= 2 ? true : isAktualnosciOpen}
                >
                  <WrapperTitleData>
                    <Title>{element.tytul}</Title>
                    <Data>{element.data}</Data>
                  </WrapperTitleData>
                  <Text>{element.tresc}</Text>
                </Article>
              ))}
            </WrapperArticleGrid>
            <WrapperShowMore>
              <P onClick={toggleAktualnosci}>
                {isAktualnosciOpen ? 'pokaż mniej' : 'pokaż więcej'}
              </P>
            </WrapperShowMore>
          </MainWrapper>
        </>
      )}
    />
  );
};

export default Aktualnosci;
