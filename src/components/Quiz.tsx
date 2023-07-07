import React, { ReactNode } from "react";
interface Props {
  children: React.ReactNode;
}

export const Quiz: React.FC<Props> = ({ children }) => {
  return (
    <section className=" py-12 ">
      <div className="container">
        <div className="section_content quiz_section_content">
          <h2 className="text-4xl	mb-4">
            Find out the cost of <br /> negative content removal answering
            <br />
            questions in 2 minutes
          </h2>
          <div className="text-2xl bg-[#fff0bf] mb-4">
            <span className="inline">+</span>
            <p className="inline">Lock in the price for 2 weeks</p>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
};
