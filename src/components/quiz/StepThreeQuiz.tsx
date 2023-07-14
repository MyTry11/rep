import React, { useEffect } from "react";
import { StepsInt } from "../QuizForm";

export const StepThreeQuiz: React.FC<StepsInt> = ({
  prevStep,
  nextStep,
  checked,
  stepThreeValue,
  // setStepThreeValue,
  handleSubmit,
  handleStepThree,
}) => {
  return (
    <div>
      <h3>How many links do you want to remove?</h3>
      {checked &&
        Object.entries(checked).map((el) =>
          Boolean(el[1]) ? (
            <div>
              <p>{el[0]} links</p>
              <input
                name={el[0]}
                type="text"
                value={stepThreeValue && stepThreeValue[el[0]]}
                // onChange={(e) => console.log(e.target.name)}
                // setStepThreeValue({...stepThreeValue, ...e.target.name})
                onChange={(e) => {
                  const { name, value } = e.currentTarget;
                  const curObj = {
                    ...stepThreeValue,
                    ...{ [name]: value },
                  } as { [key: string]: string };
                  if (typeof curObj !== "undefined") {
                    // @ts-ignore
                    handleStepThree(curObj);
                  }
                }}
              ></input>
            </div>
          ) : null
        )}

      <button onClick={prevStep} type="button">
        Previous Step
      </button>
      <button onClick={nextStep} type="button">
        next
      </button>
    </div>
  );
};
