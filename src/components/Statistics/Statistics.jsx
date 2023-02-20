import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <>
      <p>Good:{options.good}</p>
      <p>Neutral:{options.neutral}</p>
      <p>Bad:{options.bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback:{positivePercentage} %</p>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
