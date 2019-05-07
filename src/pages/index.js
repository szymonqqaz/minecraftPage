import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MainConfiguration from '../styles/MainConfiguration';
import Header from '../Sections/Header';
import NavBarPhone from '../components/NavBarPhone/NavBarPhone';
import SocialFixed from '../components/SocialFixed/SocialFixed';
import MenuDesktop from '../components/MenuDesktop/MenuDesktop';
import Aktulanosci from '../Sections/Aktulanosci';
import Landscape from '../components/Landscape/Landscape';
import ONas from '../Sections/ONas';
import Kontakt from '../Sections/Kontakt';

const IndexPage = ({ data }) => (
  <>
    <MainConfiguration>
      <Landscape>przkręć telefon</Landscape>
      <NavBarPhone />
      <SocialFixed />
      <MenuDesktop />
      <Header image={data} />
      <Aktulanosci />
      <ONas />
      <Kontakt />
    </MainConfiguration>
  </>
);

export const query = graphql`
  query {
    file(name: { regex: "./bgImage/" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.element.isRequired,
};

export default IndexPage;
