import { StatisticsList, StatisticsData } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <li>
        <StatisticsData>Good: {good}</StatisticsData>
      </li>
      <li>
        <StatisticsData>Neutral: {neutral}</StatisticsData>
      </li>
      <li>
        <StatisticsData>Bad: {bad}</StatisticsData>
      </li>
      <li>
        <StatisticsData>Total: {total}</StatisticsData>
      </li>
      <li>
        <StatisticsData>
          Positive feedback: {positivePercentage} %
        </StatisticsData>
      </li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
