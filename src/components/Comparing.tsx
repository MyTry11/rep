import React from "react";

export function Comparing() {
  return (
    <section className=" py-12 " id="comparing">
      <div className="container">
        <div className="section_content text-white text-[18px] comparing-section rounded-md">
          <h2 className="mb-5 text-4xl">Why Choose Us?</h2>
          <div className="list-cont ">
            <div className="list-cont-l flex mb-10 items-start">
              <div className="flex items-center item-list-comp">
                <span className="comp-p circle inline-block">1</span>
                <p className=" mb-3">Removing links permanently from google</p>
              </div>

              <div className="flex items-center item-list-comp">
                <span className="comp-p circle inline-block mr-5 shrink-0">
                  2
                </span>
                <p className=" mb-3">
                  In 90% of cases, website owners are unaware that their page
                  has vanished from Google
                </p>
              </div>

              <div className="flex items-center item-list-comp items-start">
                <span className="comp-p circle inline-block">3</span>
                <p className=" mb-3">
                  We don't bill you monthly for results that aren't guaranteed
                </p>
              </div>
            </div>
            <div className="list-cont-r flex">
              <div className="flex items-center item-list-comp  ">
                <span className="comp-p circle inline-block">4</span>
                <p className=" mb-3">
                  Our approach to link removal is distinct and effective
                </p>
              </div>

              <div className="flex items-center item-list-comp  ">
                <span className="comp-p circle inline-block">5</span>
                <p className=" mb-3">
                  You pay only after the job is successfully completed
                </p>
              </div>

              <div className="flex items-center item-list-comp  ">
                <span className="comp-p circle inline-block">6</span>
                <p className=" mb-3">
                  We wait up to 30 days after removal to ensure the quality of
                  our work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
