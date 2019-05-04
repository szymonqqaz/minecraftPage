import styled from 'styled-components';

const TitleSec = styled.span`
  font-size: ${({ theme }) => theme.size.m};
  position: relative;
  margin-left: 6%;
  z-index: 2;
  font-weight: 600;

  &::before {
    content: '';
    background: ${({ theme }) => theme.green};
    display: block;
    width: 100%;
    height: 120%;
    position: absolute;
    left: 50%;
    top: -10%;
    z-index: -10;
  }
`;

export default TitleSec;
