import React from "react";
import { useAppDispatch } from "../store/hooks";
import { setModalLinksActive } from "../store/modalSliceLinks";

export function Cases() {
  const dispatch = useAppDispatch();
  return (
    <section className=" py-12 " id="cases">
      <div className="container">
        <div className="section_content text-white text-[18px]">
          <div className="cases-text-block ">
            <h2 className="mb-5 text-4xl">
              News Link Removal: What Sets Us Apart
            </h2>
            <p className="mb-3">We excel at removing news cases from the web</p>
            <p className="mb-3">
              Even if a story is posted on multiple news websites, we can manage
              it. For example, we recently removed 16 out of 18 news links
              related to a case that occurred four years ago. Our approach is
              always professional and discreet
            </p>
            <p className="mb-3">
              Our success lies in working with Google rather than the websites
              themselves. In most cases, website owners are unaware that their
              page has vanished from Google's search results
            </p>
          </div>
          <div className="hui"></div>
          {/* <h3 className="mb-5 text-3xl">
            Only $390 to remove Google, Yelp or Glassdoor review permanently
          </h3> */}
          {/* <button
            className=" count-price w-[100%] "
            onClick={(e) => {
              dispatch(setModalLinksActive(true));
              document.body.classList.add("modal-active");
            }}
          >
            Can you remove my links?
          </button> */}
          <div className=" count-price w-[100%] text-center ">
            <a href="#contacts">Can you remove my links?</a>
          </div>
        </div>
      </div>
    </section>
  );
}
