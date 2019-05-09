import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon';
import discord_ico from '../../images/discord_ico.svg';
import facebookWhite from '../../images/facebookWhite.svg';

const MainWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.green};
  width: 70px;
  height: 120px;
  z-index: 9999;
  display: none;

  ${({ theme }) => theme.mq.desktopS} {
    display: block;
  }
`;

const StyledDiscIco = styled(Icon)`
  transform: scale(0.8);
`;

const StyledDiscIco2 = styled(Icon)`
  width: 20px;
  height: 20px;
  font-size: 0.1px;
  transform: scale(0.8);
  margin-top: -2px;
  margin-left: 13px;
`;

const SocialFixed = () => (
  <>
    <MainWrapper>
      <a href="https://discord.gg/BKcyNqS" target="blank">
        <StyledDiscIco src={discord_ico} />
      </a>
      <a
        href="https://m.facebook.com/groups/103528039992054?ref=bookmarks"
        target="blank"
      >
        <StyledDiscIco2 src={facebookWhite} />
      </a>
    </MainWrapper>
  </>
);

export default SocialFixed;
