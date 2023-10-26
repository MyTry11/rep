import React, { useState } from "react";
import { PrivacyModal } from "./PrivacyModal";

export const RealFooter = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <footer className=" real-footer">
      <div className="container">
        <div className="real-footer-content section_content flex text-[18px] justify-between">
          <div className="contact-block-foo w-[240px]  mb-8 p-5">
            <h3 className="mb-2 text-[1.25rem] font-[700]">Call us </h3>

            <p className="mb-4 text-[1.25rem] font-[700]"> +1 (123) 456 7890</p>
            <p className="mb-2 text-[1.25rem] font-[700]">
              {" "}
              <a href="mailto:info@reputationcoalition.com">
                info@reputationcoalition.com
              </a>
            </p>
          </div>
          <div className=" flex flex-col items-center p-5">
            <h2 className="mb-4">Reputation Coalition</h2>
            <p className="mb-4">Removing information since 2018</p>
            <p className="mb-4">Copyright 2023 All rights reserved</p>
            <button onClick={handleOpenModal}>Open Privacy Policy</button>
            {showModal && <PrivacyModal onClose={handleCloseModal} />}
          </div>
          <div className="p-5">Erasing Negative Information Globally</div>
        </div>
      </div>
    </footer>
  );
};
