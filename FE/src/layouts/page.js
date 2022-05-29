import React from 'react';
import { Container } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const _Container = ({ children }) => {
  return (
    <Container fluid className="main-page-container">
      {children}
    </Container>
  );
};

const Header = ({ children }) => {
  return <section className="main-page-header">{children}</section>;
};

const Content = ({ children }) => {
  return <section className="main-page-content">{children}</section>;
};

const Footer = ({ children }) => {
  return <section className="main-page-footer">{children}</section>;
};

_Container.propTypes = {
  children: PropTypes.element,
};
_Container.defaultProps = {
  children: <></>,
};

Header.propTypes = {
  children: PropTypes.element,
};
Header.defaultProps = {
  children: <></>,
};

Content.propTypes = {
  children: PropTypes.element,
};
Content.defaultProps = {
  children: <></>,
};

Footer.propTypes = {
  children: PropTypes.element,
};
Footer.defaultProps = {
  children: <></>,
};

export const Page = {
  Container: _Container,
  Header,
  Content,
  Footer,
};
