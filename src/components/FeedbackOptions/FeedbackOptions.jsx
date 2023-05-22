import { ButtonList, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {Object.keys(options).map(option => {
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
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
