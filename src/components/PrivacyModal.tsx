import React from "react";

interface ModalProps {
  onClose: () => void;
}

export const PrivacyModal: React.FC<ModalProps> = ({ onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className="modal-overlay-privacy relative z-[80]">
      <div className="modal-content ">
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
        <div className="privacy-policy-text p-10">
          <h2>Privacy Policy</h2>
          <h3 className="mb-4 text-[22px] font-bold">Terms of Service </h3>
          <p>
            These Terms of Service ("Terms") govern your use of the
            http://reputationcoalition.com/ website (the "Website") operated by
            http://reputationcoalition.com/ ("we," "us," or "our").
          </p>
          <p>Please read these Terms carefully before using the Website.</p>
          <h3 className="mb-4 text-[22px] font-bold">Agreement to Terms</h3>
          <p>
            By accessing or using the Website, you agree to be bound by these
            Terms. If you do not agree to these Terms, please do not use the
            Website.
          </p>
          <h3 className="mb-4 text-[22px] font-bold">Use of the Website</h3>
          <p>
            The Website is provided for informational purposes and to showcase
            the services offered by [Your Name]. Users may view and access the
            content and information on the Website.
          </p>
          <p className="mb-4 text-[22px] font-bold">Intellectual Property</p>
          <p>
            All content, including text, graphics, logos, images, and software,
            is the property of http://reputationcoalition.com/ and is protected
            by copyright and other intellectual property laws. Users may not
            use, reproduce, or distribute the content without prior written
            consent from http://reputationcoalition.com/.
          </p>
          <h3 className="mb-4 text-[22px] font-bold">
            Limitation of Liability
          </h3>
          <p>
            http://reputationcoalition.com/ makes no representations or
            warranties about the accuracy, reliability, completeness, or
            timeliness of the content on the Website.
            http://reputationcoalition.com/ shall not be liable for any
            indirect, incidental, consequential, or punitive damages arising out
            of the use or inability to use the Website.
          </p>
          <h3 className="mb-4 text-[22px] font-bold">Changes to Terms</h3>
          <p>
            We reserve the right to update or modify these Terms at any time.
            Any changes will be effective immediately upon posting the revised
            Terms on the Website.
          </p>
          <h3 className="mb-4 text-[22px] font-bold">Contact Us</h3>
          <p>
            If you have any questions about these Terms, please contact us at
            info@reputationcoalition.com.
          </p>
          <p>Last updated: 10/26/2023</p>
        </div>
      </div>
    </div>
  );
};
