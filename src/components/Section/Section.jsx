import React from 'react';
import PropTypes from 'prop-types';
import css from '../FeedbackBtn/FeedBack.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.statistic__title}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
