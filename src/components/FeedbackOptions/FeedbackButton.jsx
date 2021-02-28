const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      type="button"
      value={feedback}
      onClick={(feedback) => onLeaveFeedback(feedback)}
    >
      {feedback}
    </button>
  );
};

export default FeedbackButton;
