import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MainConfiguration from '../styles/MainConfiguration';
import Header from '../Sections/Header';

const IndexPage = ({ data }) => (
  <>
    <MainConfiguration>
      <Header image={data} />
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
