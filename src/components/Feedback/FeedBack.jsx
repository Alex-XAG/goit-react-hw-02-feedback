import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './FeedBack.module.css';

class FeedBack extends Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
    initialValueTotal: 0,
    initialValuePositiveFeedback: 0,
  };
  static propTypes = {
    initialValueGood: PropTypes.number,
    initialValueNeutral: PropTypes.number,
    initialValueBad: PropTypes.number,
    initialValueTotal: PropTypes.number,
    initialValuePositiveFeedback: PropTypes.number,
  };

  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
    total: this.props.initialValueTotal,
    positiveFeedBack: this.props.initialValuePositiveFeedback,
  };

  incrementTotalHandler = () => {
    this.setState(prevState => ({
      total: prevState.total + 1,
    }));
  };

  incrementGoodHandler = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.positiveFeedbackHandler();
  };
  incrementNeutralHandler = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.positiveFeedbackHandler();
  };
  incrementBadHandler = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.positiveFeedbackHandler();
  };

  positiveFeedbackHandler = () => {
    this.setState(prevState => ({
      positiveFeedback: (prevState.positiveFeedBack = Math.round(
        (this.state.good * 100) / this.state.total
      )),
    }));
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <ul className={css.btn__list}>
          <li onClick={this.incrementTotalHandler}>
            <button
              className={css.feedback__btn}
              type="button"
              onClick={this.incrementGoodHandler}
            >
              Good
            </button>
          </li>
          <li onClick={this.incrementTotalHandler}>
            <button
              className={css.feedback__btn}
              type="button"
              onClick={this.incrementNeutralHandler}
            >
              Neutral
            </button>
          </li>
          <li onClick={this.incrementTotalHandler}>
            <button
              className={css.feedback__btn}
              type="button"
              onClick={this.incrementBadHandler}
            >
              Bad
            </button>
          </li>
        </ul>

        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.state.total}</p>
          <p>Positive feedback: {this.state.positiveFeedBack} %</p>
        </div>
      </div>
    );
  }
}

export default FeedBack;
