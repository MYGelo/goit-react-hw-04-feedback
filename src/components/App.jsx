import { useState } from 'react';
import { FeedbackOptions } from './feedback/feedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './notification/notification';
import { Statistics } from './statistics/statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleFeedback = e => {
    const statistics = e.target.name;

    switch (statistics) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    let totalFeedback = countTotalFeedback();
    if (!totalFeedback) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
