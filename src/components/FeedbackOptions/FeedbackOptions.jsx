import { ButtonList, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <li key={option}>
            <Button name={option} type="button" onClick={onLeaveFeedback}>
              {option.toUpperCase()}
            </Button>
          </li>
        );
      })}
    </ButtonList>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
