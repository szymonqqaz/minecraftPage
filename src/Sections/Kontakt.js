import React from 'react';
import styled from 'styled-components';
import TitleSec from '../components/TitleSec/TitleSec';
import Icon from '../components/Icon/Icon';
import discord_ico from '../images/discord_ico.svg';
import facebookWhite from '../images/facebookWhite.svg';
import undraw_message from '../images/undraw_message.svg';

const MainWrapper = styled.section`
  width: 100%;
  position: relative;
  padding: 10vh 0 5vh;

  ${({ theme }) => theme.mq.tablet} {
    background: ${({ theme }) => theme.grey};
    padding-top: 5vh;
  }

  ${({ theme }) => theme.mq.desktopS} {
    width: 94%;
    min-height: 40vh;
    padding-bottom: 0;
  }
`;

const WrapperGrid = styled.div`
  display: block;

  ${({ theme }) => theme.mq.tablet} {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto;
  }

  ${({ theme }) => theme.mq.desktopS} {
    display: grid;
    grid-template-columns: 70%;
    margin-top: 10vh;
    margin-left: 2%;
  }
`;

const P1 = styled.p`
  width: 90%;
  margin: 10% 5%;
  text-align: center;
  font-size: ${({ theme }) => theme.size.xs};

  ${({ theme }) => theme.mq.tablet} {
    margin: 0;
    justify-self: center;
    align-self: center;
  }

  ${({ theme }) => theme.mq.desktopS} {
    align-self: center;
    justify-self: center;
    font-size: ${({ theme }) => theme.size.m};
  }
`;

const Socials = styled.div`
  display: block;
  width: 160px;
  height: 70px;
  background: ${({ theme }) => theme.green};
  margin: 0 auto;
  position: relative;

  ${({ theme }) => theme.mq.desktopS} {
    display: none;
  }
`;

const WrapperforDisc = styled.div`
  width: 50px;
  margin: auto;
  position: absolute;
  left: 15%;
  top: 20%;
`;

const WrapperforFaceobok = styled.div`
  width: 50px;
  height: 40px;
  margin: auto 0;
  position: absolute;
  right: 12%;
  top: 26%;
`;

const StyledDiscIco = styled(Icon)`
  transform: scale(1);
`;

const StyledDiscIco2 = styled(Icon)`
  width: 20px;
  height: 20px;
  transform: scale(0.9);
`;

const PGmail = styled(P1)`
  color: ${({ theme }) => theme.green};
  margin-bottom: 0;

  ${({ theme }) => theme.mq.tablet} {
    grid-column: 2/3;
  }

  ${({ theme }) => theme.mq.desktopS} {
    grid-column: 1/2;
    grid-row: 3/4;
  }
`;

const IconMessage = styled(Icon)`
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
    transform: scale(0.3);
    width: 20%;
    height: 20vh;
    grid-column: 2/3;
    grid-row: 1/2;
    position: relative;
    top: -60%;
    left: 0;
  }

  ${({ theme }) => theme.mq.desktopS} {
    position: absolute;
    left: 65%;
    top: 20%;
  }
`;

const WrapperTitleSec = styled.div`
  position: static;

  ${({ theme }) => theme.mq.desktopS} {
    position: relative;
    left: 70%;
    width: 20%;
  }
`;

const text = [
  'Wbijajcie na naszego discorda oraz facebooka',
  'A jeśli macie jakieś pytania bądź wątpliwości to piszcie na maila',
];

const Kontakt = () => (
  <>
    <MainWrapper className="sec4">
      <WrapperTitleSec>
        <TitleSec>Kontakt</TitleSec>
      </WrapperTitleSec>
      <WrapperGrid>
        <P1>{text[0]}</P1>
        <IconMessage src={undraw_message} />
        <Socials>
          <WrapperforDisc>
            <StyledDiscIco src={discord_ico} />
          </WrapperforDisc>
          <WrapperforFaceobok>
            <StyledDiscIco2 src={facebookWhite} />
          </WrapperforFaceobok>
        </Socials>
        <P1>{text[1]}</P1>
        <PGmail>support@gmail.com</PGmail>
      </WrapperGrid>
    </MainWrapper>
  </>
);

export default Kontakt;
