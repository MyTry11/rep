import React from "react";
import { StepsInt } from "../QuizForm";
import telegram from "../../images/telegram.png";
import whatsapp from "../../images/whatsapp.png";
import viber from "../../images/viber.png";
import phone from "../../images/social-phone.png";
import darkbg from "../../images/dark-bg.png";

import "react-phone-number-input/style.css";
import { useFormik } from "formik";
import TextMask from "react-text-mask";
import * as yup from "yup";
import { phoneNumberMask } from "../QuizForm";
interface FormValues {
  email: string;
  // Add other form field types if needed
}

export const LastStepQuiz: React.FC<StepsInt> = ({
  messengerChange,
  currentMessenger,
  handleFormSubmit,
  phoneValue,
  phoneChange,
  //@ts-ignore
  formik,
  checked,
  currentRadio,
  stepThreeValue,
}) => {
  function getKeyAndValue(object: Record<string, string>): string {
    let result = "";
    for (const key in object) {
      const value = object[key];
      result += `${key}: ${value}, `;
    }
    return result;
  }
  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.email) {
      errors.email = "";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const formik2 = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="last-step-cont text-center flex flex-col text-[18px] ">
      <h2 className="text-[1.5rem] font-[700] text-center mb-6">
        Thank you for the answers
      </h2>
      <h2 className="mb-6 font-[500]">Starting to count</h2>
      <h2 className="mb-6 font-[500]">
        Choose the best way to send the results
      </h2>
      <div className="hidden">
        <input type="text" value={currentRadio} name="step2" />

        <input
          type="text"
          //@ts-ignore
          value={getKeyAndValue(stepThreeValue)}
          name="step3"
        />
      </div>
      <div className="flex radio-container justify-between mb-8 max-w-[370px] self-center	socials-last-step">
        <input
          type="radio"
          name="social"
          id="Phone"
          value={"Call me"}
          checked={currentMessenger === "Phone"}
          onChange={messengerChange}
          className="box-border	radio-last-step"
        />
        <label htmlFor="Phone" className="social-cont">
          <img src={phone} alt="" className="socials-img mb-4" />
          Call me
        </label>
        <input
          type="radio"
          name="social"
          id="Whatsapp"
          value={"Whatsapp"}
          checked={currentMessenger === "Whatsapp"}
          onChange={messengerChange}
          className="box-border	radio-last-step"
        />
        <label htmlFor="Whatsapp" className="social-cont">
          <img src={whatsapp} alt="" className="socials-img mb-4" />
          WhatsApp
        </label>

        <input
          type="radio"
          name="social"
          id="Telegram"
          value={"Telegram"}
          checked={currentMessenger === "Telegram"}
          onChange={messengerChange}
          className="box-border	radio-last-step"
        />
        <label htmlFor="Telegram" className="social-cont">
          <img src={telegram} alt="" className="socials-img mb-4" />
          Telegram
        </label>

        <input
          type="radio"
          name="social"
          id="Viber"
          value={"Viber"}
          checked={currentMessenger === "Viber"}
          onChange={messengerChange}
          className="box-border	radio-last-step"
        />
        <label htmlFor="Viber" className="social-cont">
          <img src={viber} alt="" className="socials-img mb-4" />
          Viber
        </label>
      </div>
      {/* @ts-ignore */}
      <TextMask
        required
        name="last-step-phone"
        mask={phoneNumberMask}
        value={formik.values.phoneNumber}
        onChange={(event) => {
          const formattedValue = event.target.value;
          formik.setFieldValue("phoneNumber", formattedValue);
        }}
        onBlur={formik.handleBlur("phoneNumber")}
        className={`form-control block w-full border-b-2 mb-4 h-10 box-border input-last-step p-[10px] ${
          formik.touched.phoneNumber && formik.errors.phoneNumber
            ? "is-invalid"
            : ""
        }`}
        placeholder={`${currentMessenger} number*`}
      />
      {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
        <div className="invalid-feedback mb-4">{formik.errors.phoneNumber}</div>
      ) : null}
      <input
        required
        type="email"
        name="email"
        id="email"
        placeholder="Email*"
        onChange={formik2.handleChange}
        onBlur={formik2.handleBlur}
        value={formik2.values.email}
        className="text-black block w-full mb-3  input-footer modalCallInput mb-8 border-b-2"
      />
      {formik2.touched.email && formik2.errors.email ? (
        <span>{formik2.errors.email}</span>
      ) : null}

      <div className="flex justify-center">
        <button type="submit" className="some_btn count-price submit-form-btn">
          Get approximate price
        </button>
      </div>
    </div>
  );
};
