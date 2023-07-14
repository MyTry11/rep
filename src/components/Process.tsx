import React from "react";
import checkmark from "../images/checkmark.png";

export function Process() {
  return (
    <section className=" py-12 " id="how">
      <div className="container ">
        <div className="section_content">
          <h2 className="text-4xl	mb-4 ">How you remove content?</h2>
          <p className="mb-5">
            Any content in the internet follow the <br /> rules of those four
            instances
          </p>
          <div className="flex justify-between	mb-5">
            <div className="text-left	">
              <div className="flex items-center	">
                <span className="circle	inline-block">
                  <img src={checkmark} alt="" className="w-3" />
                </span>
                <p className="inline-block">Web Hosting</p>
              </div>
              <div className="flex items-center	">
                <span className="circle	inline-block">
                  <img src={checkmark} alt="" className="w-3" />
                </span>
                <p className="inline-block">
                  Domain name <br /> registrar
                </p>
              </div>
            </div>
            <div className="text-left	mr-10">
              <div className="flex items-center	">
                <span className="circle	inline-block">
                  <img src={checkmark} alt="" className="w-3" />
                </span>
                <p className="inline-block">Search engine</p>
              </div>
              <div className="flex items-center	">
                <span className="circle	inline-block">
                  <img src={checkmark} alt="" className="w-3" />
                </span>
                <p className="inline-block">Country</p>
              </div>
            </div>
          </div>

          <p className="mb-3 max-w-xs	">
            We study each link, rules of each of the instances to which it
            relates and find reasons to make a complaint. <br /> <br /> When the
            website is posted on hosting or start showing up in google they are
            not verifying the content. But we can find reasons and viloations
            that can lead to remove the content
          </p>
          <div className="flex justify-end">
            <p className="w-[85%] text-right m-0">
              <span className="text-amber-300	">&mdash;&mdash;&mdash; </span>
              {`If there are no reasons`.toUpperCase()} <br />
              <span className="span-find">
                FOR REMOVAL, WE WILL{" "}
                <span className="border-b-2 border-amber-300">FIND</span> THEM
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
