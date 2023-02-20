import React from 'react';
import { Component } from 'react';
// import css from './Feedback.module.css';
import FeedbackBtn from '../FeedbackBtn/FeedbackBtn';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedbackTotal = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  positiveFeedbackHandler = () => {
    const result = Math.round(
      (100 / this.countFeedbackTotal()) * this.state.good
    );
    return result ? result : 0;
  };

  leaveFeedbackHandler = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackBtn
            options={this.state}
            leaveFeedbackHandler={this.leaveFeedbackHandler}
          />
        </Section>

        <Section title="Statistics">
          {this.countFeedbackTotal() ? (
            <Statistics
              options={this.state}
              total={this.countFeedbackTotal()}
              positivePercentage={this.positiveFeedbackHandler()}
            />
          ) : (
            <Notification message="We have not feedback else((( You can do it first!!!)))" />
          )}
        </Section>
      </div>
    );
  }
}

export default FeedBack;
