import React from 'react';
import styled from 'styled-components';

const HemburgerWrapper = styled.button`
  padding: 15px;
  cursor: pointer;
  border: none;
  background: none;
  position: relative;
`;

const HamburgerIn = styled.div`
  height: 5px;
  width: 35px;
  position: relative;
  background: ${({ theme }) => theme.black};

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

const Hamburger = ({ ...props }) => (
  <>
    <HemburgerWrapper {...props}>
      <HamburgerIn />
    </HemburgerWrapper>
  </>
);

export default Hamburger;
