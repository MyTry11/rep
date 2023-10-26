import React from "react";
import { StepsInt } from "../QuizForm";

export const StepTwoQuiz: React.FC<StepsInt> = ({
  nextStep,
  prevStep,
  radioChange,
  currentRadio,
}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4 text-[1.5rem] font-[700] text-center">
        When the information was published?
      </h2>
      <div className="w-[100%] mb-5">
        <div className="form-check flex ">
          <input
            type="radio"
            name="react-tips"
            value={"this-year"}
            checked={currentRadio === "this-year"}
            className="form-check-input mr-1"
            onChange={radioChange}
            id="radio1"
          />
          <label htmlFor="radio1" className=" block">
            This year
          </label>
        </div>
        <div className="form-check flex ">
          <input
            type="radio"
            name="react-tips"
            value={"1-2-years"}
            checked={currentRadio === "1-2-years"}
            className="form-check-input mr-1"
            onChange={radioChange}
            id="radio2"
          />
          <label className=" block" htmlFor="radio2">
            1-2 years ago
          </label>
        </div>
        <div className="form-check flex ">
          <input
            type="radio"
            name="react-tips"
            value={"3-4-years"}
            checked={currentRadio === "3-4-years"}
            className="form-check-input mr-1"
            onChange={radioChange}
            id="radio3"
          />
          <label className=" block" htmlFor="radio3">
            3-4 years ago
          </label>
        </div>
        <div className="form-check flex ">
          <input
            type="radio"
            name="react-tips"
            value={"more-5-years"}
            checked={currentRadio === "more-5-years"}
            className="form-check-input mr-1"
            onChange={radioChange}
            id="radio4"
          />
          <label className=" block" htmlFor="radio4">
            more than 5 years ago
          </label>
        </div>
      </div>
      <div className="flex step-two-btns-cont w-full ">
        <button
          onClick={prevStep}
          className="some_btn count-price grey-btn second-step-prev-btn"
        >
          Previous Step
        </button>
        <button onClick={nextStep} className="some_btn count-price">
          Next Step
        </button>
      </div>
    </div>
  );
};
