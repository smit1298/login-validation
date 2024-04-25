import React from "react";

const ProgressBar = ({ percentage, difficulty }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-inner" style={{ width: `${percentage}%` }}>
        <span className="progress-label">{difficulty}</span>
        <span className="progress-percentage">{percentage}%</span>
      </div>
    </div>
  );
};
export default ProgressBar;
