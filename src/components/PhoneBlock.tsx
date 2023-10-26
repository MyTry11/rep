import React from "react";
import { PhoneBlockProps } from "./Main";

export const PhoneBlock: React.FC<PhoneBlockProps> = ({ phone }) => {
  return (
    <div className="phone_block flex items-center flex-col w-[195px] pb-8 text-[12px] text-z">
      <p className="block text-[0.7rem] mb-1  ">Call us Mo-Su 9:00-21:00</p>
      <div className="flex items-center tracking-[.7px] font-[700]">
        <a href="tel:+79991627357" type="phone" className="text-lg">
          +7(999) 162-73-57
        </a>
      </div>
    </div>
  );
};
