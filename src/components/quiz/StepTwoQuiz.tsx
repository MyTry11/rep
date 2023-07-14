import React from "react";
import { StepsInt } from "../QuizForm";

export const StepTwoQuiz: React.FC<StepsInt> = ({
  nextStep,
  prevStep,
  radioChange,
  currentRadio,
}) => {
  return (
    <div>
      <h2>When the information was published?</h2>
      <div className="form-check">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="this-year"
            checked={currentRadio === "this-year"}
            className="form-check-input"
            onChange={radioChange}
          />
          This year
        </label>
      </div>

      <div className="form-check">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="1-2-years"
            checked={currentRadio === "1-2-years"}
            className="form-check-input"
            onChange={radioChange}
          />
          1-2 years ago
        </label>
      </div>

      <div className="form-check">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="3-4-years"
            checked={currentRadio === "3-4-years"}
            className="form-check-input"
            onChange={radioChange}
          />
          3-4 years ago
        </label>
      </div>
      <div className="form-check">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="more-5-years"
            checked={currentRadio === "more-5-years"}
            className="form-check-input"
            onChange={radioChange}
          />
          more than 5 years ago
        </label>
      </div>
      <button onClick={prevStep}>Previous Step</button>
      <button onClick={nextStep}>Next Step</button>
    </div>
  );
};
