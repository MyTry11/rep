import React from "react";
import { StepsInt } from "../QuizForm";

export const LastStepQuiz: React.FC<StepsInt> = ({
  messengerChange,
  currentMessenger,
}) => {
  return (
    <div>
      <h1>Thank you for the answers</h1>
      <h2>Starting to count</h2>
      <h2>Choose the best way to send the results</h2>
      <div className="flex">
        <label htmlFor="Whatstapp" className="">
          <div className="w-16 bg-gray-400	">
            <input
              type="radio"
              name="social"
              id="Whatsapp"
              value={currentMessenger === "Whatsapp"}
              onChange={messengerChange}
              className="box-border	hidden"
            />
            <div>sfsd</div>
          </div>
        </label>
        <label htmlFor="Telegram">
          <div className="w-16 bg-gray-400	">
            <input
              type="radio"
              name="social"
              id="Telegram"
              value={currentMessenger === "Telegram"}
              onChange={messengerChange}
              className="box-border	"
            />
          </div>
        </label>
        <label htmlFor="Viber">
          <div className="w-16 bg-gray-400	">
            <input
              type="radio"
              name="social"
              id="Viber"
              value={currentMessenger === "Viber"}
              onChange={messengerChange}
              className="box-border	"
            />
          </div>
        </label>
        <label htmlFor="phone">
          <div className="w-16 bg-gray-400	">
            <input
              type="radio"
              name="social"
              id="phone"
              value={currentMessenger === "Call me"}
              onChange={messengerChange}
              className="box-border	"
            />
          </div>
        </label>
      </div>
    </div>
  );
};
