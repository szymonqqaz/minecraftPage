import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { scrollTo } from 'scroll-js';
import Icon from '../Icon/Icon';
import discordText from '../../images/discordText.svg';
import facebook from '../../images/facebook.svg';
import getHeight from '../../function/getHeight';

const MainWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: ${({ theme }) => theme.white};
  z-index: 8000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  transform: translateX(${({ isMenuOpen }) => (isMenuOpen ? '0' : '100')}%);
  transition: transform 0.2s;

  ${({ theme }) => theme.mq.desktopS} {
    display: none;
  }
`;

const OneElement = styled.p`
  font-size: ${({ theme }) => theme.size.m};
  font-weight: ${({ theme }) => theme.weight.m};
  margin: -10% 0;
  color: black;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIcon = styled(Icon)`
  height: auto;
  width: 200px;
  font-size: 0.1rem;
  fill: #7289da !important;
`;

const StyledIcon2 = styled(Icon)`
  height: auto;
  width: 40px;
  font-size: 0.1rem;
  margin-right: 8px;
`;

const menu = ['Start', 'Aktualności', 'O nas', 'Kontakt'];

class MenuPhone extends Component {
  scroll = nr => {
    this.func();
    setTimeout(() => {
      scrollTo(document.body, {
        top: getHeight()[nr] - 60,
        easing: 'ease-in-out',
      });
    }, 200);
  };

  func = () => {
    const { send } = this.props;
    send();
  };

  render() {
    const { isMenuOpen } = this.props;

    return (
      <>
        <MainWrapper isMenuOpen={isMenuOpen}>
          {menu.map((element, i) => (
            <OneElement
              key={element + 'menuphone'}
              onClick={() => this.scroll(i)}
            >
              {element}
            </OneElement>
          ))}
          <Footer>
            <a href="https://discord.gg/BKcyNqS" target="blank">
              <StyledIcon src={discordText} />
            </a>
            <a
              href="https://m.facebook.com/groups/103528039992054?ref=bookmarks"
              target="blank"
            >
              <StyledIcon2 src={facebook} />
            </a>
          </Footer>
        </MainWrapper>
      </>
    );
  }
}

MenuPhone.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  send: PropTypes.func.isRequired,
};

export default MenuPhone;
