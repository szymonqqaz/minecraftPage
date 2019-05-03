import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImg = styled(Img)`
  width: 50%;
`;

const MainWrapper = styled.header`
  width: 100%;
  height: 100vh;
`;

const Header = ({ image }) => (
  <>
    <MainWrapper>
      <StyledImg fluid={image.file.childImageSharp.fluid} />
    </MainWrapper>
  </>
);

Header.propTypes = {
  image: PropTypes.element.isRequired,
};

export default Header;
