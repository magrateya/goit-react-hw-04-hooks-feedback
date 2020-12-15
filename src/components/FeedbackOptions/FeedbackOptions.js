import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedbackoption.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const labels = Object.keys(options);

  return (
    <div className={s.container}>
      {labels.map(label => (
        <button key={label} onClick={() => onLeaveFeedback(label)}>
          {label.slice(0, 1).toUpperCase() + label.slice(1)}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
