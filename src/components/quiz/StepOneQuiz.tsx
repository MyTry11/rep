import React, { useEffect, useState } from "react";
import { StepsInt } from "../QuizForm";
export const StepOneQuiz: React.FC<StepsInt> = ({
  nextStep,
  toggle,
  checked,
}) => {
  // useEffect(() => {
  //   console.log(checked);
  // });
  return (
    <>
      <h2>What kind of links you want to remove?</h2>

      <div className="flex flex-wrap">
        <div className="w-[150px]">
          <p>News links</p>
          <input
            type="checkbox" //@ts-ignore
            checked={checked.news} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="news"
          />
        </div>
        <div className="w-[150px]">
          <p>Reviews</p>
          <input
            type="checkbox" //@ts-ignore
            checked={checked.reviews} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="reviews"
          />
        </div>

        <div className="w-[150px]">
          <p>Blogs</p>
          <input
            type="checkbox" //@ts-ignore
            checked={checked.blogs} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="blogs"
          />
        </div>

        <div className="w-[150px]">
          <p>Images</p>
          <input
            type="checkbox" //@ts-ignore
            checked={checked.image} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="image"
          />
        </div>

        <div className="w-[150px]">
          <p>Videos</p>
          <input
            type="checkbox" //@ts-ignore
            checked={checked.video} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="video"
          />
        </div>

        <div className="w-[150px]">
          <p>Mugshots</p>
          <input
            type="checkbox" //@ts-ignore
            checked={checked.mugshots} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="mugshots"
          />
        </div>
        <button onClick={nextStep}>Next step</button>
      </div>
    </>
  );
};
