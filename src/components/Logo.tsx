import React from "react";
import { LogoProps } from "./Main";

export const Logo: React.FC<LogoProps> = ({ logo }) => {
  return <img src={logo} alt="" className="max-w-[190px] h-[90px] mb-5" />;
};
