import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';
import './headerStyle.css';

const StyledImg = styled(Img)`
  height: 100%;
`;

const MainWrapper = styled.header`
  height: 100vh;
  width: 100%;
`;

const Header = ({ image }) => (
  <>
    <MainWrapper>
      <StyledImg
        className="img"
        fluid={image.file.childImageSharp.fluid}
        alt="backgorund"
      />
    </MainWrapper>
  </>
);

Header.propTypes = {
  image: PropTypes.element.isRequired,
};

export default Header;
