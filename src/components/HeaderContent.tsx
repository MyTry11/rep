import React from "react";
import { PhoneBlock } from "./PhoneBlock";
import { PhoneBlockProps } from "./Main";

export const HeaderContent: React.FC<PhoneBlockProps> = ({
  children,
  phone,
}) => {
  return <div>{children}</div>;
};
