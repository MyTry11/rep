import React, { useState, useRef, MutableRefObject } from "react";
import emailjs from "@emailjs/browser";
import checkmarkgreen from "../images/check-mark-green.svg";
import TextMask from "react-text-mask";
import { phoneNumberMask } from "./QuizForm";
import { useFormik } from "formik";
import * as yup from "yup";

interface ModalCallMeProps {
  onClose: () => void;
}
interface FormValues {
  email: string;
  // Add other form field types if needed
}

export const ModalLinks: React.FC<ModalCallMeProps> = ({ onClose }) => {
  // const [name, setName] = useState<string>("");
  // const [phone, setPhone] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [links, setLinks] = useState<string>("");
  // const handleCallMeClick = (e: React.FormEvent<HTMLFormElement>) => {
  //   console.log("sending links:", name, phone, email, links);
  //   e.preventDefault();
  //   onClose();
  // };
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const form: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const [formFiled, setFormFiled] = useState<boolean>(false);

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

  const handleCallMeClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (form.current) {
    //   emailjs
    //     .sendForm(
    //       "service_i0ermid",
    //       "template_3289x0b",

    //       form.current,
    //       "0TgiLzRI1VTKEX6O7",
    //       //@ts-ignore
    //       { customValue1: "abc", customValue2: "abv" }
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //         console.log("message sent");
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // }
    setFormFiled(true);
  };
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
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
    <div className="modal-overlay">
      <div className="modal modal-links rounded-md">
        <button onClick={onClose} className="closeCallModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
          </svg>
        </button>
        {formFiled ? (
          <div className="flex flex-col text-[18px] h-[495px]">
            <img
              src={checkmarkgreen}
              alt=""
              className="w-[80px] h-[80px] self-center mb-8"
            />
            <h3 className="mb-4">Thank you!</h3>
            <p className="mb-4">Your submission has been sent!</p>
          </div>
        ) : (
          <form
            ref={form}
            onSubmit={handleCallMeClick}
            className="flex flex-col justify-center items-center "
          >
            <h2 className="text-[20px] mb-4">Get quote in one hour!</h2>
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
        )}
      </div>
    </div>
  );
};
