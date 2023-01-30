import { ButtonContainer } from "./style";

import { ButtonHTMLAttributes } from "react";

export const ButtonComponent = ({ ...rest }) => {
  return <ButtonContainer {...rest}></ButtonContainer>;
};
