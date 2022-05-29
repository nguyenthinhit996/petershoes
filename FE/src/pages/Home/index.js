import React from 'react';
import PropTypes from 'prop-types';
import { Page } from '../../layouts/page.js';
import { Header } from '../../layouts/header.js';

// eslint-disable-next-line no-unused-vars
const Home = (pros) => {
  return (
    <Page.Container>
      <Page.Header>
        <Header.WelCome />
        <Header.Nvabar />
      </Page.Header>
      <Page.Content>
        <h1>content</h1>
      </Page.Content>
      <Page.Footer>
        <h1>content</h1>
      </Page.Footer>
    </Page.Container>
  );
};

Home.propTypes = {
  pros: PropTypes.object,
};
Home.defaultProps = {
  pros: {},
};

export default Home;
