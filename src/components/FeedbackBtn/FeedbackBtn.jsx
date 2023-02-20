import React from 'react';
import { PropTypes } from 'prop-types';
import css from '../FeedbackBtn/FeedBack.module.css';

const FeedbackBtn = ({ options, leaveFeedbackHandler }) => {
  return (
    <ul className={css.btn__list}>
      {Object.keys(options).map(option => {
        return (
          <li key={option}>
            <button
              className={css.feedback__btn}
              type="button"
              onClick={() => {
                leaveFeedbackHandler(option);
              }}
            >
              {option.toUpperCase()}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackBtn.propTypes = {
  options: PropTypes.object.isRequired,
  leaveFeedbackHandler: PropTypes.func.isRequired,
};

export default FeedbackBtn;
