import React from 'react';
import PropTypes from 'prop-types';
import css from '../FeedbackBtn/FeedBack.module.css';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <>
      <p className={css.statistic__item}>Good: {options.good}</p>
      <p className={css.statistic__item}>Neutral: {options.neutral}</p>
      <p className={css.statistic__item}>Bad: {options.bad}</p>
      <p className={css.statistic__item}>Total: {total}</p>
      <p className={css.statistic__item}>
        Positive feedback: {positivePercentage} %
      </p>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
