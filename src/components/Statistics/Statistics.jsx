import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>
        Good:<span>{good}</span>
      </li>
      <li>
        Neutral:<span>{neutral}</span>
      </li>
      <li>
        Bad:<span>{bad}</span>
      </li>
      <li>
        Total:<span>{total}</span>
      </li>
      <li>
        Positive percentage:
        <span>
          {positivePercentage}
          <span>&#37;</span>
        </span>
      </li>
    </ul>
  );
};

Statistics.defaultProps = {
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
