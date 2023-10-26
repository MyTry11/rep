import React, { useEffect, useState } from "react";
import { StepsInt } from "../QuizForm";
export const StepOneQuiz: React.FC<StepsInt> = ({
  nextStep,
  toggle,
  checked,
}) => {
  const [somethingChecked, setSomethingChecked] = useState<boolean>(false);
  const handleNextStepOne = (e: React.MouseEvent<HTMLElement>) => {
    console.log(checked);
    // @ts-ignore
    for (const [key, value] of Object.entries(checked)) {
      if (value === true) {
        // @ts-ignore
        nextStep();
        setSomethingChecked(true);
      }
      setSomethingChecked(false);
    }
  };
  useEffect(() => {
    // @ts-ignore
    for (const [key, value] of Object.entries(checked)) {
      if (value === true) {
        // @ts-ignore
        setSomethingChecked(true);
      }
    }
  }, [toggle]);
  return (
    <div className="">
      <h2 className="text-center mb-[1.5625rem] text-[1.5rem] font-[700]">
        What kind of links do you want to remove?
      </h2>
      <div className="flex flex-col mb-8 inputs-first-step">
        <label htmlFor="checkbox-rect1" className="block form-check">
          <input
            type="checkbox" //@ts-ignore
            checked={checked.news} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="news"
            className="mr-1 inline-block"
            id="checkbox-rect1"
          />
          News links
        </label>
        <label htmlFor="checkbox-rect2" className="block form-check ">
          <input
            type="checkbox" //@ts-ignore
            checked={checked.reviews} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="reviews"
            className="mr-1 inline-block "
            id="checkbox-rect2"
          />
          Reviews
        </label>

        <label htmlFor="checkbox-rect3" className="block form-check">
          <input
            type="checkbox" //@ts-ignore
            checked={checked.blogs} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="blogs"
            className="mr-1 inline-block"
            id="checkbox-rect3"
          />
          Blogs
        </label>

        <label htmlFor="checkbox-rect4" className="block form-check">
          <input
            type="checkbox" //@ts-ignore
            checked={checked.image} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="image"
            className="mr-1 inline-block"
            id="checkbox-rect4"
          />
          Images
        </label>

        <label htmlFor="checkbox-rect5" className="block form-check">
          <input
            type="checkbox" //@ts-ignore
            checked={checked.video} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="video"
            className="mr-1 inline-block"
            id="checkbox-rect5"
          />
          Videos
        </label>

        <label htmlFor="checkbox-rect6" className="block form-check">
          <input
            type="checkbox" //@ts-ignore
            checked={checked.mugshots} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="mugshots"
            className="mr-1 inline-block"
            id="checkbox-rect6"
          />
          Mugshots
        </label>
      </div>
      {/* <div className="flex flex-wrap justify-center mb-8">
        <div className="flex pl-8 checkbox-rect w-[150px] mb-3 flex">
          <input
            type="checkbox" //@ts-ignore
            checked={checked.news} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="news"
            className="mr-1 inline-block"
            id="checkbox-rect1"
          />
          <label htmlFor="checkbox-rect1" className="inline-block">
            News links
          </label>
        </div>
        <div className="flex pl-8 checkbox-rect w-[150px] mb-3 flex">
          <input
            type="checkbox" //@ts-ignore
            checked={checked.reviews} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="reviews"
            className="mr-1 inline-block"
            id="checkbox-rect2"
          />
          <label htmlFor="checkbox-rect2" className="inline-block">
            Reviews
          </label>
        </div>

        <div className="flex pl-8 checkbox-rect w-[150px] mb-3 flex">
          <input
            type="checkbox" //@ts-ignore
            checked={checked.blogs} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="blogs"
            className="mr-1 inline-block"
            id="checkbox-rect3"
          />
          <label htmlFor="checkbox-rect3" className="inline-block">
            Blogs
          </label>
        </div>

        <div className="flex pl-8 checkbox-rect w-[150px] mb-3 flex">
          <input
            type="checkbox" //@ts-ignore
            checked={checked.image} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="image"
            className="mr-1 inline-block"
            id="checkbox-rect4"
          />
          <label htmlFor="checkbox-rect4" className="inline-block">
            Images
          </label>
        </div>

        <div className="flex pl-8 checkbox-rect w-[150px] mb-3 flex">
          <input
            type="checkbox" //@ts-ignore
            checked={checked.video} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="video"
            className="mr-1 inline-block"
            id="checkbox-rect5"
          />
          <label htmlFor="checkbox-rect5" className="inline-block">
            Videos
          </label>
        </div>

        <div className="flex pl-8 checkbox-rect w-[150px] mb-3 flex">
          <input
            type="checkbox" //@ts-ignore
            checked={checked.mugshots} //@ts-ignore
            onChange={(e) => toggle(e)}
            name="mugshots"
            className="mr-1 inline-block"
            id="checkbox-rect6"
          />
          <label htmlFor="checkbox-rect6" className="inline-block">
            Mugshots
          </label>
        </div>
      </div> */}
      {!somethingChecked && (
        <p className="text-red-500 mb-4">Please choose at least 1 option</p>
      )}
      <div className="flex justify-center">
        <button
          onClick={handleNextStepOne}
          className="count-price flex items-center text-center justify-center w-[313px] h-[56px]"
        >
          Next step
        </button>
      </div>
    </div>
  );
};
