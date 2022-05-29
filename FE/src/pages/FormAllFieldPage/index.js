import React from 'react';
import PropTypes from 'prop-types';

const FormAllField = ({ name }) => {
  const abc = 'dfadsfss';
  console.log(abc);

  console.log(name);
  return <p> {abc} </p>;
};

FormAllField.propTypes = {
  name: PropTypes.string,
};
FormAllField.defaultProps = {
  name: 'hihi',
};

export default FormAllField;
