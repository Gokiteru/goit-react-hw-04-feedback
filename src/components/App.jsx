import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedblackOptions/FeedblackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (key) => {
    this.setState((prevState) => ({
      [key]: prevState[key] + 1,
    }));
  };

  totalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  positivePercentage = () => {
    if (this.totalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.totalFeedback()) * 100);
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options = {Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />{' '}
        </Section>

        <Section title="Statistics">
          {this.totalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
