import React, {
  useEffect,
  useState,
  useLayoutEffect,
  MouseEventHandler,
  useRef,
  MutableRefObject,
} from "react";
import { StepOneQuiz } from "./quiz/StepOneQuiz";
import { StepTwoQuiz } from "./quiz/StepTwoQuiz";
import { StepThreeQuiz } from "./quiz/StepThreeQuiz";
import { LastStepQuiz } from "./quiz/LastStepQuiz";
import "react-phone-number-input/style.css";
import PhoneInput, { formatPhoneNumber } from "react-phone-number-input";
import TextMask from "react-text-mask";
import checkmarkgreen from "../images/check-mark-green.svg";

import { useFormik } from "formik";
import * as yup from "yup";

import emailjs from "@emailjs/browser";

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
  handleFormSubmit?(event: React.FormEvent<HTMLFormElement>): void;
  currentMessenger?: string;
  messengerChange?(value: React.FormEvent<HTMLInputElement>): void;
  // setStepThreeValue?(value: any): void;
  handleStepThree?(value: { [key: string]: string }): void;
  phoneValue?: string;
  phoneChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  setOptionsChecked?(value: number): void;
  optionsChecked?: number;
}
export const phoneNumberMask = [
  "+",
  /\d/,
  " ",
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];
// {} | { [key: string]: string }
emailjs.init("your_user_id");

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
  const [currentMessenger, setCurrentMessenger] = useState<string>("Phone");
  const [progress, setProgress] = useState<number>(25);
  const [phoneValue, setPhoneValue] = useState<string>("");
  const [formFiled, setFormFiled] = useState<boolean>(false);

  const form: MutableRefObject<HTMLFormElement | null> = useRef(null);

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
  const phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneValue(e.target.value);
  };
  const validationSchema = yup.object().shape({
    phoneNumber: yup.string().required("Phone number is required"),
  });
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values.phoneNumber);
    },
  });

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

  useEffect(() => {
    setProgress((prev) => {
      const newProgress = ((currentStep + 1) / steps.length) * 100;
      return newProgress;
    });
  }, [currentStep]);
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(checked);
    // console.log(currentRadio);
    // console.log(stepThreeValue);
    // console.log(currentMessenger);
    if (form.current) {
      emailjs
        .sendForm(
          "service_i0ermid",
          "template_jszqftb",
          form.current,
          "0TgiLzRI1VTKEX6O7",
          // @ts-ignore
          { customValue1: "abc", customValue2: "ab2" }
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    if (currentStep != 0) {
      console.log(currentStep);
      setFormFiled(true);
      console.log("form submitted");
    }
  };

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
      handleFormSubmit={handleFormSubmit}
      phoneValue={phoneValue}
      phoneChange={phoneChange}
      // @ts-ignore
      formik={formik}
      checked={checked}
      currentRadio={currentRadio}
      stepThreeValue={stepThreeValue}
    />,
  ];
  useEffect(() => {
    // console.log(checked);
  }, [currentStep]);

  return (
    <>
      <form
        ref={form}
        className="h-[650px] p-5 bg-white quiz-form "
        onSubmit={handleFormSubmit}
      >
        <div className="bg-last">
          {formFiled ? (
            <div className="flex flex-col text-[18px] h-[495px] thanks-subm text-center pt-20">
              {/* <img
                src={checkmarkgreen}
                alt=""
                className="w-[80px] h-[80px] self-center mb-8"
              /> */}
              <div className="checkmark-test  "></div>
              <h3 className="mb-4">Thank you!</h3>
              <p className="mb-4">Your submission has been sent!</p>
            </div>
          ) : (
            <div className="w-[95%]">
              <div className="par-par ">
                <p className="progress-p ">
                  Step {currentStep + 1} of {steps.length}
                </p>
                <div className="text-center progress-par mb-4">
                  <div
                    className="progress-child"
                    style={{ width: `${progress}%` }}
                    // className="progress-child"
                  ></div>
                </div>
              </div>
              {steps[currentStep]}
            </div>
          )}
        </div>
      </form>
    </>
  );
}
