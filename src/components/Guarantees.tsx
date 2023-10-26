import React from "react";
import { useAppDispatch } from "../store/hooks";
import { setModalActive } from "../store/modalSlice";
import { setModalLinksActive } from "../store/modalSliceLinks";

export function Guarantees() {
  const dispatch = useAppDispatch();
  return (
    <section className=" py-12 " id="guarantees">
      <div className="container">
        <div className="section_content text-white text-lg section_guarantees	text-z">
          <h2 className="text-4xl mb-5 text-center text-z">It is safe</h2>
          <p className=" mb-10 text-center text-[25px] text-z">
            The whole process of removal <br /> campaign is anonymous
          </p>
          <p className="mb-5 text-z">
            We do not disclose any information related to the removed link
          </p>
          <p className="mb-10  text-z">
            Our focus is solely on content creators who violate the rules of
            content placement on the web
          </p>
          <div className="flex flex-col justify-center">
            <p className="mb-3  flex circle-w-space flex  text-z text-[21px]">
              None of our complaints will mention your information or our
              company, and we do not directly contact website owners
            </p>
            <p className="mb-3 flex  circle-w-space flex text-z text-[21px]">
              We take privacy seriously, ensuring that your involvement remains
              discreet
            </p>
          </div>

          <button
            className=" count-price w-[100%] text-z "
            onClick={(e) => {
              dispatch(setModalLinksActive(true));
              document.body.classList.add("modal-active");
            }}
          >
            Can you remove my links?
          </button>
        </div>
      </div>
    </section>
  );
}
