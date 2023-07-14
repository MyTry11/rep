import React from "react";
import { useState } from "react";
import logo from "../images/logo.png";
import phone from "../images/phone.jpg";
import { PhoneBlock } from "./PhoneBlock";
import { HeaderContent } from "./HeaderContent";
import { Logo } from "./Logo";
export interface PhoneBlockProps {
  children?: React.ReactNode;
  phone?: string;
}
export interface LogoProps {
  logo: string;
}
export function Main() {
  const [active, setActive] = useState<boolean>(false);

  const closeBurger = (e: any) => {
    if (e.target.tagName === "A") {
      setActive(false);
    }
  };

  return (
    <main className="main ">
      <header className="App-header">
        <div className="container">
          <div className="header_content pt-5">
            <div className="flex justify-between">
              {/* <Logo logo={logo}></Logo> */}
              <h2 className="mb-8">Dylan Removals</h2>
              <div className="nav_burger" onClick={() => setActive(true)}>
                <span className="nav_burger_item"></span>
                <span className="nav_burger_item"></span>
                <span className="nav_burger_item"></span>
              </div>
              {/* <button onClick={() => setActive(true)}>burg</button> */}
              <nav className={active ? "nav active" : "nav"}>
                {active && (
                  <div>
                    <HeaderContent>
                      <div className="flex justify-between w-[100%]">
                        {/* <Logo logo={logo}></Logo> */}
                        <h2 className="mb-8">Dylan Removals</h2>

                        <div
                          className="nav__close"
                          onClick={() => setActive(false)}
                        ></div>
                      </div>

                      <PhoneBlock phone={phone}></PhoneBlock>
                    </HeaderContent>
                    <ul
                      onClick={closeBurger}
                      className="flex flex-col items-center	"
                    >
                      <li className="ul_item mb-10">
                        <a href="#cost">COUNT THE COST</a>
                      </li>
                      <li className="ul_item mb-10">
                        <a href="#how">HOW IT WORKS</a>
                      </li>
                      <li className="ul_item mb-10">
                        <a href="#guarantees">IS IT SAFE</a>
                      </li>
                      <li className="ul_item mb-10">
                        <a href="#comparing">WHY US</a>
                      </li>
                      <li className="ul_item mb-10">
                        <a href="#cases">WHAT WE ARE GOOD AT</a>
                      </li>
                    </ul>
                  </div>
                )}
              </nav>
            </div>
            <PhoneBlock phone={phone}></PhoneBlock>
          </div>
        </div>
      </header>
      <section>
        <div className="container pb-8">
          <div className="section_content main-section	">
            <h1 className="text-base text-yellow-300 text-[1.1rem] mb-4 mb-4">
              What do your customers think of you when they Google your name?
            </h1>
            <h2 className="text-2xl">
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
            <div className="count-price w-[100%] pointer">
              <a href="#cost">Calculate the cost</a>
            </div>
            {/* <button className=" count-price w-[100%] " onClick={}>
              Calculate the cost
            </button> */}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="p-5">крутящаяся поебота</div>
          <div className="p-5 text-right">
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
