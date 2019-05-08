import React, { useState } from 'react';
import styled from 'styled-components';
import { scrollTo } from 'scroll-js';
import Hamburger from '../Hamburger/Hamburger';
import getHeight from '../../function/getHeight';

const MainWrapper = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  width: 6%;
  height: 100vh;
  background: ${({ theme }) => theme.white};
  display: none;
  z-index: 99999;

  ${({ theme }) => theme.mq.desktopS} {
    display: block;
  }
`;

const WrapperHamburger = styled.div`
  width: 100%;
  height: 6vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IpSerweraWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.green};
  min-height: 6vw;
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;

  ::after {
    content: 'nbwlm.com';
    position: absolute;
    width: 20vw;
    height: 100%;
    z-index: -1;
    background: ${({ theme }) => theme.white};
    left: 0;
    transform: translateX(${({ posit }) => (posit ? '-20' : '0')}vw);
    transition: transform 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.black};
  }
`;

const P = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.size.m};
`;

const WrapperForMenuE = styled.div`
  width: 100%;
  height: calc(100% - 12vw);
  position: absolute;
  top: 12vw;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const OneElement = styled.p`
  margin: 60% 0 !important;
  transform: rotate(90deg);
  font-size: 1.4rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;

  ${({ theme }) => theme.mq.desktopB} {
    font-size: ${({ theme }) => theme.size.s};
  }

  ${({ theme }) => theme.mq.desktopBB} {
    font-size: ${({ theme }) => theme.size.m};
  }

  :first-child {
    margin-top: -38vh;
  }

  :before {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.green};
    border-radius: 50px;
    height: 8px;
    width: 8px;
    top: 5px;
    left: 110%;
    opacity: 0;
  }

  :hover:before {
    opacity: 1;
  }
`;

const MenuOption = ['Start', 'Aktualności', 'O nas', 'Kontakt'];

const MenuDesktop = () => {
  const [isIpOpen, setIpOpen] = useState(false);

  const toggleIpOpen = () => {
    setIpOpen(!isIpOpen);
  };

  function scroll(nr) {
    scrollTo(document.body, {
      top: getHeight()[nr],
      easing: 'ease-in-out',
    });
  }

  return (
    <>
      <MainWrapper>
        <WrapperHamburger>
          <Hamburger onClick={toggleIpOpen} />
        </WrapperHamburger>
        <IpSerweraWrapper posit={isIpOpen}>
          <P>IP</P>
        </IpSerweraWrapper>
        <WrapperForMenuE>
          {MenuOption.map((element, i) => (
            <OneElement key={element + 'desktop'} onClick={() => scroll(i)}>
              {element}
            </OneElement>
          ))}
        </WrapperForMenuE>
      </MainWrapper>
    </>
  );
};

export default MenuDesktop;
