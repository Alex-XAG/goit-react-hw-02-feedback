import React from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Helpers/Section';
import { Notification } from './Helpers/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    // total = this.state.good + this.state.neutral + this.state.bad;
    return Object.values(this.state).reduce((acc, value) => (acc += value), 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = ({ target }) => {
    this.setState(prevState => ({
      [target.name]: prevState[target.name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please live feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {isNaN(this.countPositiveFeedbackPercentage()) && (
            <Notification message="There is no feedback" />
          )}

          {!isNaN(this.countPositiveFeedbackPercentage()) && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
