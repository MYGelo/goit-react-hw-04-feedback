import React, { Component } from "react";
import {FeedbackOptions } from "./feedback/feedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./notification/notification";
import { Statistics } from "./statistics/statistics";



export class App extends Component {
      state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }

    handleFeedback = e => {
      this.setState((pState) => ({
        [e]: pState[e] + 1
      }));
    };

    countTotalFeedback = () => {
      const {good, neutral, bad,} = this.state;
      let total = good + neutral + bad;
      return total;
  };

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    let totalFeedback = this.countTotalFeedback();
    if (!totalFeedback) {
        return 0;
    }
    return Math.round(good / totalFeedback * 100);
};

render() {
  const {good, neutral, bad,} = this.state;
    return (
      <div>
    <Section title='Please leave feedback'>
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
            <Notification message="There is no feedback"/>
            
          )}
        </Section>
    
    
      </div>
    );
}
}

