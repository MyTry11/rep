import React, { useEffect, useState } from "react";
import { StepOneQuiz } from "./quiz/StepOneQuiz";
import { StepTwoQuiz } from "./quiz/StepTwoQuiz";
import { StepThreeQuiz } from "./quiz/StepThreeQuiz";
import { LastStepQuiz } from "./quiz/LastStepQuiz";

export interface CheckedInt {
  news: boolean | string;
  reviews: boolean | string;
  blogs: boolean | string;
  image: boolean | string;
  video: boolean | string;
  mugshots: boolean | string;
}

export interface StepThreeInt {}

export interface StepsInt {
  nextStep?(e: any): void;
  prevStep?(): void;
  checked?: CheckedInt;
  toggle?(value: any): void;
  radioChange?(value: any): void;
  currentRadio?: string;
  createInitialInputsStepThree?(value: { [key: string]: string }): void;
  stepThreeValue?: { [key: string]: string };
  handleSubmit?(value: MouseEvent): void;
  currentMessenger?: string;
  messengerChange?(value: React.FormEvent<HTMLInputElement>): void;
  // setStepThreeValue?(value: any): void;
  handleStepThree?(value: { [key: string]: string }): void;
}
// {} | { [key: string]: string }
export function QuizForm() {
  const checkeds = {
    news: false,
    reviews: false,
    blogs: false,
    image: false,
    video: false,
    mugshots: false,
  };
  const [currentStep, setCurrentStep] = useState(0);

  const [checked, setChecked] = useState<CheckedInt>(checkeds);
  const [currentRadio, setCurrentRadio] = useState<string>("this-year");
  const [stepThreeValue, setStepThreeValue] = useState<any>({});
  const [currentMessenger, setCurrentMessenger] = useState<string>("Whatsapp");
  const nextStep = (): void => {
    setCurrentStep(currentStep + 1);
  };
  const prevStep = (): void => {
    setCurrentStep(currentStep - 1);
  };

  const toggle = (value: any) => {
    setChecked({ ...checked, [value.target.name]: value.target.checked });
  };
  const radioChange = (e: any): void => {
    // console.log(e.target.value);
    setCurrentRadio(e.target.value);
  };
  const handleStepThree = (obj: { [key: string]: string }) => {
    setStepThreeValue(obj);
  };

  const messengerChange = (e: any) => {
    setCurrentMessenger(e.target.id);
    // console.log(currentMessenger);
  };

  useEffect(() => {
    const asd = Object.entries(checked)
      .filter((el) => el[1] === true)
      .map((el) => {
        el.splice(1, 1, "");
        return el;
      });

    // console.log(asd);
    let obj = {};

    asd.forEach((v) => {
      let key = v[0];
      let value = v[1];
      // @ts-ignore
      obj[key] = value;
    });
    // console.log(obj);

    setStepThreeValue(obj);
  }, [checked]);

  const steps = [
    <StepOneQuiz checked={checked} toggle={toggle} nextStep={nextStep} />,
    <StepTwoQuiz
      prevStep={prevStep}
      nextStep={nextStep}
      radioChange={radioChange}
      currentRadio={currentRadio}
    />,
    <StepThreeQuiz
      prevStep={prevStep}
      nextStep={nextStep}
      checked={checked}
      stepThreeValue={stepThreeValue}
      handleStepThree={handleStepThree}
      // setStepThreeValue={setStepThreeValue}
    />,
    <LastStepQuiz
      messengerChange={messengerChange}
      currentMessenger={currentMessenger}
    />,
  ];

  return (
    <form className="h-[650px] p-5">
      <div>
        Question {currentStep + 1} of {steps.length}
      </div>
      {steps[currentStep]}
    </form>
  );
}
