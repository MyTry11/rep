import React from "react";

export function Guarantees() {
  return (
    <section className=" py-12 " id="guarantees">
      <div className="container">
        <div className="section_content">
          <h2 className="text-4xl mb-5">It is safe</h2>
          <p className=" ">
            The whole process of removal campaign is anonymous
          </p>
          <p className="mb-10 ">You will not relate to the removed link</p>
          <div className="flex justify-between">
            <p className="mb-3 mr-3 circle-w-space flex ">
              None of the complaints will <br /> include information about
              <br /> you or our company
            </p>
            <p className="mb-3 w-[140px] circle-w-space flex">
              Not contacting <br /> website owners directly
            </p>
          </div>

          <button className="count-price w-[100%] ">Order removal</button>
        </div>
      </div>
    </section>
  );
}
