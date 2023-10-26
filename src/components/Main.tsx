import React from "react";
import { useState } from "react";
import logo from "../images/logo.png";
import phone from "../images/phone.jpg";
import { PhoneBlock } from "./PhoneBlock";
import { HeaderContent } from "./HeaderContent";
import { Logo } from "./Logo";
import telegram from "../images/telegram.png";
import whatsapp from "../images/whatsapp.png";
import viber from "../images/viber.png";

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
  console.log(window.innerWidth);
  return (
    <main className="main ">
      <header className="App-header">
        <div className="container">
          <div className="header_content pt-10">
            <div className="header_inner flex justify-between">
              <h2 className="mb-16 text-[25px] w-[150px] header-h2 text-z">
                Reputation Coalition
              </h2>
              {window.innerWidth > 900 && (
                <div className="flex ">
                  <p className="mr-3 ask-us text-z">
                    Ask us anything
                    <br />
                    <a href="mailto:info@reputationcoalition.com">
                      info@reputationcoalition.com
                    </a>
                  </p>

                  <PhoneBlock phone={phone}></PhoneBlock>
                </div>
              )}
              {window.innerWidth < 900 && (
                <div className="right-col-header flex">
                  {window.innerWidth < 900 && (
                    <div className="flex  text-[12px] mr-4">
                      <p className="block text-[12px] mb-1 mr-2 text-z">
                        Call us Mo-Su <br /> 9:00-21:00
                      </p>
                      <div className="flex tracking-[.7px] font-[700]">
                        <a
                          href="tel:+79991627357"
                          type="phone"
                          className="text-lg"
                        >
                          <svg
                            width="27"
                            height="27"
                            viewBox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M26.5956 21.0791C26.435 20.2926 25.9158 19.5897 25.1728 19.1503C23.7961 18.3374 22.3744 17.5597 20.9994 16.8073L20.055 16.2903C18.8615 15.6352 18.0404 15.7568 17.5613 15.9746C17.1048 16.1825 16.5064 16.683 16.2435 17.8886C16.2397 17.9089 16.237 17.9295 16.2353 17.9502C16.2072 18.0618 16.1517 18.1647 16.074 18.2495C15.9962 18.3344 15.8985 18.3986 15.7898 18.4364C15.4862 18.5453 15.1276 18.4738 14.8328 18.2428C12.5772 16.4742 10.5385 14.4453 8.75914 12.1983C8.53034 11.9106 8.45885 11.5586 8.56775 11.2572C8.61835 11.1159 8.7564 10.8684 9.1381 10.7864H9.13919C9.15734 10.7842 9.1766 10.7809 9.1942 10.7771C10.4168 10.507 10.9025 9.87945 11.0955 9.40095C11.3128 8.86195 11.3859 7.94015 10.5004 6.61025C9.83385 5.6131 9.27725 4.52355 8.7388 3.46975C8.4935 2.99015 8.2493 2.5111 7.99355 2.0392C7.48755 1.10145 6.81325 0.517899 6.04215 0.350699C5.34475 0.198349 4.60884 0.400199 3.91034 0.928199C3.21844 1.45675 2.48309 2.0381 1.79119 2.7058C0.299595 4.15835 -0.0408557 5.9948 0.805044 8.01715C4.39874 16.6098 10.5884 22.7555 19.2025 26.2838C19.8785 26.561 20.5341 26.6985 21.1616 26.6985C22.2957 26.6985 23.338 26.2486 24.2367 25.3581C24.9709 24.636 25.6139 23.8044 26.1633 23.0756C26.3724 22.7923 26.5191 22.4679 26.5937 22.1237C26.6683 21.7796 26.6686 21.4236 26.5956 21.0791ZM25.2811 22.4195C24.7597 23.1108 24.1459 23.9045 23.4639 24.5755C22.3744 25.6546 21.1176 25.8817 19.62 25.2657C11.2858 21.8519 5.29689 15.9058 1.82034 7.59255C1.14384 5.9772 1.38584 4.6363 2.55679 3.4956C3.20634 2.8686 3.91199 2.31145 4.57694 1.8038C4.92949 1.5365 5.26609 1.40175 5.58179 1.40175C5.65879 1.40175 5.7347 1.41 5.8095 1.42595C6.2561 1.5233 6.6774 1.91545 7.0261 2.5617C7.27745 3.02645 7.5178 3.4978 7.75925 3.9697C8.312 5.0521 8.88345 6.1708 9.58525 7.2202C10.0687 7.9462 10.2425 8.5743 10.0753 8.98955C9.91305 9.39325 9.42245 9.5918 9.01655 9.6897C8.96942 9.69133 8.92291 9.701 8.87905 9.7183C8.57249 9.77851 8.28699 9.91778 8.05083 10.1223C7.81466 10.3268 7.63604 10.5895 7.53265 10.8843C7.29394 11.5471 7.43035 12.294 7.8973 12.8819C9.7303 15.1963 11.8303 17.2861 14.1535 19.1079C14.7492 19.5754 15.4999 19.7102 16.1632 19.4709C16.4543 19.3683 16.7138 19.1921 16.9165 18.9595C17.1192 18.7268 17.2582 18.4456 17.3199 18.1432C17.3244 18.1214 17.3275 18.0994 17.3292 18.0772C17.4244 17.6647 17.6207 17.1565 18.0167 16.9756C18.4683 16.771 19.087 17.0141 19.5259 17.2544L20.4714 17.7725C21.8381 18.5205 23.2522 19.2938 24.6129 20.0974C25.0892 20.379 25.4192 20.8173 25.5182 21.2997C25.6007 21.7012 25.5149 22.1005 25.2811 22.4195Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  )}
                  <div
                    className="nav_burger text-z"
                    onClick={() => setActive(true)}
                  >
                    <span className="nav_burger_item"></span>
                    <span className="nav_burger_item"></span>
                    <span className="nav_burger_item"></span>
                  </div>
                </div>
              )}

              {window.innerWidth < 900 && (
                <nav className={active ? "nav active" : "nav"}>
                  {active && (
                    <div className="container">
                      <HeaderContent>
                        <div className="flex justify-between w-[100%]">
                          <h2 className="mb-8 text-[25px] text-z">
                            Reputation <br />
                            Coalition
                          </h2>

                          <div
                            className="nav__close"
                            onClick={() => setActive(false)}
                          ></div>
                        </div>
                        <PhoneBlock phone={phone}></PhoneBlock>
                      </HeaderContent>
                      <ul
                        onClick={closeBurger}
                        className="ul_list flex flex-col items-center	"
                      >
                        <li className="ul_item ">
                          <a href="#cost">COUNT THE COST</a>
                        </li>
                        <li className="ul_item ">
                          <a href="#how">HOW IT WORKS</a>
                        </li>
                        <li className="ul_item ">
                          <a href="#guarantees">IS IT SAFE</a>
                        </li>
                        <li className="ul_item ">
                          <a href="#comparing">WHY US</a>
                        </li>
                        <li className="ul_item ">
                          <a href="#cases">WHAT WE ARE GOOD AT</a>
                        </li>
                        <li className="ul_item last_ul_item">
                          <a href="#contacts">CONTACTS</a>
                        </li>
                      </ul>
                      <div className="flex flex-col items-center">
                        <p className="mr-3 mb-3 text-[0.7rem]">
                          Ask us anything, we are online
                        </p>
                        <p className="mb-3">
                          <a href="mailto:info@reputationcoalition.com">
                            info@reputationcoalition.com
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                </nav>
              )}
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container pb-8">
          <div className="section_content main-section ">
            <div className="flex justify-between">
              <div className="left-col-s1 ">
                <h1 className=" text-base text-yellow-300 text-[1.1rem] mb-4 mb-4 hidden text-z">
                  What do your customers think of you when they Google your
                  name?
                </h1>
                <h2 className=" main-h2 text-[45px] mb-8 s1-h2 text-z">
                  Remove negative <br /> search results <br />{" "}
                  <b>permanently</b>
                </h2>
                <p className="days-30 mb-40 days-30">
                  <span className="border-b-4 border-amber-300 text-z">
                    in 30 days
                  </span>
                </p>

                <div className="main-ps text-base  mb-7 four-texts text-[1.25vw] "></div>
                <div className="count-price  pointer text-center calculate-btn-1 text-z">
                  <a href="#cost">CALCULATE THE COST</a>
                </div>
              </div>
              <div className="right-col-s1 pt-4 max-w-[320px] text-z">
                <p className="mb-4 text-[20px]">Payment after removal</p>
                <p className="mb-4 text-[20px]">
                  Up to 30 days quality control period
                </p>
                <p className="mb-4 text-[20px]">3-4 times cheaper than SEO</p>
                <p className="mb-4 text-[20px]">
                  90% of people Google company reviews before purchase
                </p>
              </div>
            </div>

            {window.innerWidth > 900 && (
              <ul className="flex justify-between items-center nav1 text-z">
                <li className="ul_item ul_item_first ">
                  <a href="#cost">COUNT THE COST</a>
                </li>
                <li className="ul_item ">
                  <a href="#how">HOW IT WORKS</a>
                </li>
                <li className="ul_item ">
                  <a href="#guarantees">IS IT SAFE</a>
                </li>
                <li className="ul_item ">
                  <a href="#comparing">WHY US</a>
                </li>
                <li className="ul_item ">
                  <a href="#cases">WHAT WE ARE GOOD AT</a>
                </li>
                <li className="ul_item ">
                  <a href="#contacts">CONTACTS</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
