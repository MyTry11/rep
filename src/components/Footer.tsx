import React, { useState, useRef, MutableRefObject } from "react";
import { ModalCallMe } from "./ModalCallMe";
import { useAppDispatch } from "../store/hooks";
import { setModalActive } from "../store/modalSlice";
import telegram from "../images/telegram.png";
import whatsapp from "../images/whatsapp.png";
import viber from "../images/viber.png";
import worldwide from "../images/worldwide.jpg";
import TextMask from "react-text-mask";
import { phoneNumberMask } from "./QuizForm";
import { useFormik } from "formik";
import * as yup from "yup";
import checkmarkgreen from "../images/check-mark-green.svg";

import emailjs from "@emailjs/browser";

interface FormValues {
  email: string;
  // Add other form field types if needed
}

export default function Footer() {
  const dispatch = useAppDispatch();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const form: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const [formFiled, setFormFiled] = useState<boolean>(false);

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleCallMeClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_i0ermid",
          "template_3289x0b",

          form.current,
          "0TgiLzRI1VTKEX6O7",
          //@ts-ignore
          { customValue1: "abc", customValue2: "abv" }
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
    console.log("call me pressed");
    setFormFiled(true);

    // console.log(phoneNumber, firstName, secondName, email, message);
  };
  const validationSchema = yup.object().shape({
    phoneNumber: yup.string().required("Phone number is required"),
  });

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

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values.phoneNumber);
    },
  });
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
    <div className="footer" id="contacts">
      <div className="container">
        <div className="section_content flex flex-col items-center pre-footer-section">
          <div className="footer-content text-[18px]">
            <div className="call-footer mb-8 rounded-md">
              {formFiled ? (
                <div className="flex flex-col text-[18px] h-[495px] thanks-subm text-center">
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
                <>
                  <h2 className="text-[1.25rem] mb-4">
                    Schedule a FREE consultation today!
                  </h2>
                  <form
                    ref={form}
                    onSubmit={handleCallMeClick}
                    className="flex flex-col justify-center items-center "
                  >
                    <input
                      required
                      name="first"
                      type="text"
                      placeholder="First name*"
                      value={firstName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFirstName(e.target.value);
                      }}
                      className="block w-full mb-3 input-footer  modalCallInput mb-3  "
                    />
                    <input
                      required
                      name="second"
                      type="text"
                      placeholder="Second name*"
                      value={secondName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setSecondName(e.target.value);
                      }}
                      className="block w-full mb-3 input-footer  modalCallInput mb-3  "
                    />
                    {/* @ts-ignore */}
                    <TextMask
                      required
                      name="phoneNumber"
                      mask={phoneNumberMask}
                      value={formik.values.phoneNumber}
                      onChange={(event) => {
                        const formattedValue = event.target.value;
                        formik.setFieldValue("phoneNumber", formattedValue);
                        console.log(formik.values.phoneNumber);
                      }}
                      onBlur={formik.handleBlur("phoneNumber")}
                      className={`form-control block w-full text-black border-b-2 mb-4 h-10 rounded box-border input-last-step h-[60px] p-[10px] ${
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder={`Phone number*`}
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email*"
                      onChange={formik2.handleChange}
                      onBlur={formik2.handleBlur}
                      value={formik2.values.email}
                      className="text-black block w-full mb-3  input-footer modalCallInput mb-3"
                    />
                    {formik2.touched.email && formik2.errors.email ? (
                      <span>{formik2.errors.email}</span>
                    ) : null}

                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Message*"
                      value={message}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setMessage(e.target.value);
                      }}
                      className="block w-full mb-3   modalCallInput mb-3 h-[80px] rounded-md p-3 text-black"
                    />
                    <button type="submit" className="w-full   footer-form-btn ">
                      Call Me
                    </button>
                  </form>
                </>
              )}
            </div>
            <div className="CTA-footer">
              <h2 className="mb-8 text-[2rem] ">Your Questions, Our Answers</h2>
              <p className="mb-4">Expect a response within just 15 minutes</p>
              <p className="mb-4">
                We'll provide you with a range of removal strategies and guide
                you to find the best one that suits your specific needs
              </p>
              <p className="mb-4">
                Begin your removal campaign today to take control of your online
                reputation.
              </p>
              <p className="mb-4">
                You can anticipate the removal of negative content within 45
                days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
