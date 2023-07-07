import React from "react";
import logo from "../images/logo.png";
import phone from "../images/phone.jpg";

export function Main() {
  return (
    <main className="main ">
      <header className="App-header">
        <div className="container">
          <div className="header_content py-3.5">
            <img src={logo} alt="" className="max-w-[190px] h-[90px] mb-5" />
            <div className="phone_block flex items-center flex-col w-[200px]">
              <p className="block text-xs">Call us Mo-Su 9:00-21:00</p>
              <div className="flex items-center">
                <img src={phone} alt="" className="inline" />
                <a href="tel:+79991627357" type="phone" className="text-lg">
                  +79991627357
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container pb-8">
          <div className="section_content pt-5 main-section	">
            <h1 className="text-2xl mb-4 mb-4">
              What do your customers think of you when they Google your name?
            </h1>
            <h2 className="text-xl">
              Remove negative search results <b>permanently</b>
            </h2>
            <p className="text-2xl">in 30 days</p>
            <div className="text-base">
              <div>
                <p>5 years guarantee</p>
                <p>Payment after removal</p>
              </div>
              <div>
                <p>2-3 times cheaper than SEO</p>
                <p>90% of people Google company reviews before purchase</p>
              </div>
            </div>
            <button className=" count-price w-[100%] ">
              Calculate the cost
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="p-5">крутящаяся поебота</div>
          <div className="p-5">
            <p>We are trusted</p>
            <p>
              Removing info for <br /> other ORM companies and <br />{" "}
              exclusively for clients
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
