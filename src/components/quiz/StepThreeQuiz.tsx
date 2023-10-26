import React, { useEffect } from "react";
import { StepsInt } from "../QuizForm";

export const StepThreeQuiz: React.FC<StepsInt> = ({
  prevStep,
  nextStep,
  checked,
  stepThreeValue,
  handleSubmit,
  handleStepThree,
}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4 text-[1.5rem] font-[700] text-center">
        How many links do you want to remove?
      </h2>
      {checked &&
        Object.entries(checked).map((el, i) =>
          Boolean(el[1]) ? (
            <div className="w-full">
              <input
                className="w-full border-b-2 mb-4 h-10 box-border"
                placeholder={`How many ${el[0]} links`}
                name={`${el[0]}`}
                id={"3input" + i}
                type="text"
                value={stepThreeValue && stepThreeValue[el[0]]}
                onChange={(e) => {
                  const { name, value } = e.currentTarget;
                  const curObj = {
                    ...stepThreeValue,
                    ...{ [name]: value },
                  } as { [key: string]: string };
                  if (typeof curObj !== "undefined") {
                    console.log(name);
                    console.log(value);
                    // @ts-ignore
                    handleStepThree(curObj);
                  }
                }}
              ></input>
            </div>
          ) : null
        )}

      <div className="flex step-two-btns-cont w-full">
        <button
          onClick={prevStep}
          type="button"
          className="some_btn count-price grey-btn"
        >
          Previous Step
        </button>
        <button
          onClick={nextStep}
          type="button"
          className="some_btn count-price"
        >
          Next step
        </button>
      </div>
    </div>
  );
};
