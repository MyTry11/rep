import React, { useState } from "react";

export const FormBottom = () => {
  const [linksValue, setLinksValue] = useState<string>("");
  return (
    <section className=" py-12 " id="form-bottom">
      <div className="container">
        <div className="section_content text-white">
          <h2>Calculate the cost to remove links and offer removal strategy</h2>
          <h3>
            <span className="text-amber-300	">&mdash;&mdash;&mdash; </span>
            For free
          </h3>
          <p className="circle-w-space">Answer in 10 minutes</p>
          <p className="circle-w-space">
            Offer few removal strategies and find the best
          </p>
          <p className="circle-w-space">Get started removal campaign today</p>
          <form action="">
            <input type="text" name="links" value={linksValue} />
          </form>
        </div>
      </div>
    </section>
  );
};
