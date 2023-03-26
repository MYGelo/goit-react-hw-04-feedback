import React, { useState } from 'react';
import { FeedbackOptions } from './feedback/feedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './notification/notification';
import { Statistics } from './statistics/statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleFeedback = e => {
    this.setState(pState => ({
      [e]: pState[e] + 1,
    }));
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let totalFeedback = this.countTotalFeedback();
    if (!totalFeedback) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
