import { v4 as uuidv4 } from "uuid";

import FeedbackButton from "./FeedbackButton";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => (
    <FeedbackButton
      feedback={option}
      onLeaveFeedback={onLeaveFeedback}
      key={uuidv4()}
    ></FeedbackButton>
  ));
};

export default FeedbackOptions;
