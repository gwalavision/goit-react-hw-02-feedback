import { Component } from "react";

import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

import { options } from "./options";

class App extends Component {
  constructor() {
    super();

    this.handleFeedback = this.handleFeedback.bind(this);
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback(e) {
    const feedbackType = e.target.value;
    this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value);
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;

    if (good + bad + neutral === 0) {
      return;
    } else return Number(Math.round((good / (good + bad + neutral)) * 100));
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
