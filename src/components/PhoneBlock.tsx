import React from "react";
import { PhoneBlockProps } from "./Main";

export const PhoneBlock: React.FC<PhoneBlockProps> = ({ phone }) => {
  return (
    <div className="phone_block flex items-center flex-col w-[200px] pb-8">
      <p className="block text-xs">Call us Mo-Su 9:00-21:00</p>
      <div className="flex items-center">
        <img src={phone} alt="" className="inline" />
        <a href="tel:+79991627357" type="phone" className="text-lg">
          +79991627357
        </a>
      </div>
    </div>
  );
};
