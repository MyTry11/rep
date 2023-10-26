import React, { useState } from "react";

interface ModalCallMeProps {
  onClose: () => void;
}

export const ModalCallMe: React.FC<ModalCallMeProps> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleCallMeClick = (e: React.FormEvent<HTMLFormElement>) => {
    // Perform any action you want with the phoneNumber here (e.g., call a backend API).
    // For this example, let's just log the phone number to the console.
    e.preventDefault();
    console.log("Calling:", phoneNumber);

    // Close the modal after clicking "Call Me" button.
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal modal-call">
        <button onClick={onClose} className="closeCallModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
          </svg>
        </button>
        <h2 className="text-[25px] mb-4">Leave a request</h2>
        <p className="text-[18px]">
          Enter your phone number and we will call you during 10 minutes
        </p>
        <form action="" onSubmit={handleCallMeClick}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Your phone number"
            className="block w-full mb-3 count-price  modalCallInput mb-3"
          />
          <button type="submit" className="w-full count-price">
            Call Me
          </button>
        </form>
      </div>
    </div>
  );
};
