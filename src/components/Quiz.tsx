import React, { ReactNode } from "react";
interface Props {
  children: React.ReactNode;
}

export const Quiz: React.FC<Props> = ({ children }) => {
  return (
    <section className=" py-12 " id="cost">
      <div className="container">
        <div className="section_content quiz_section_content text-white	text-[18px]">
          {window.innerWidth > 900 && (
            <h2 className="text-[2.865vw] text-center mb-5">
              <span className="font-[700]">
                Find out the cost of{" "}
                <span className="negative-content-dotted">
                  negative content <br /> removal
                </span>{" "}
              </span>
              answering questions in 2 minutes
            </h2>
          )}
          {window.innerWidth < 900 && (
            <h2 className=" text-[2.25rem]	mb-4 font-medium text-center">
              <span className="font-[700]">
                Find out the cost of <br />{" "}
                <span className="negative-content-dotted">
                  negative content <br /> removal
                </span>{" "}
              </span>
              answering
              <br />
              questions in 2 minutes
            </h2>
          )}

          <div className="text-[1rem]  mb-4  flex justify-center">
            <div className="w-[45%] lock-price flex justify-center">
              <p className="inline ">+ Lock in the price for 2 weeks</p>
            </div>
          </div>
          <div className="flex justify-between ">
            {children}
            <div className="quiz-right text-center">
              <div className="quiz-right-content">
                <p className="  mb-20">
                  <span className="font-[700]">KEEP ANSWERING</span> <br /> SO
                  THAT WE CAN PROCEED TO COST CALCULATION
                </p>
                <p className="mb-20">
                  <span className="font-[700]">
                    Dylan, the CEO of Reputation Coalition,
                  </span>{" "}
                  personally oversees each project
                </p>
                <p className="mb-10">
                  At the end of the test, you will receive a quote with a price
                  that we will hold for you for 14 days
                </p>
                <div className="quiz-phone">
                  <p className="quiz-phone-p text-[15px]">
                    If you have any difficulties answering questions - call us
                  </p>
                  <a href="tel:+79991627357" type="phone" className="text-lg">
                    +7(999) 162-73-57
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
