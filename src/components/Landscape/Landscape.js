import styled from 'styled-components';

const Landscape = styled.div`
  display: none;

  @media (orientation: landscape) {
    position: fixed;
    background: grey;
    z-index: 90000;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    font-size: 2rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ theme }) => theme.mq.desktopS} {
    display: none;
  }
`;

export default Landscape;
