import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from "react";
import { Input, InputContainer } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputWidth: string;
  icon: React.ReactElement;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { inputWidth, icon: Icon, ...rest },
  ref
) => {
  return (
    <InputContainer inputWidth={inputWidth}>
      <Input {...rest} ref={ref} />
      {Icon}
    </InputContainer>
  );
};

export const InputComponent = forwardRef(InputBase);
