import React from "react";

interface ModalProps {
  onClose: () => void;
}

export const PrivacyModal: React.FC<ModalProps> = ({ onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className="modal-overlay-privacy">
      <div className="modal-content">
        <div className="close-button" onClick={handleCloseClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="#000"
              d="M19.41 7.41L18 6l-6 6-6-6L4.59 7.41 12 14.83z"
            />
          </svg>
        </div>
        <div className="privacy-policy-text">
          <h2>Privacy Policy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
            sagittis nisl. Donec vitae orci sem. Sed interdum, justo quis
            dignissim tempus, lorem arcu dapibus nulla, a facilisis elit turpis
            eget orci. Sed nec odio ut turpis varius fermentum sit amet a nisi.
          </p>
        </div>
      </div>
    </div>
  );
};
