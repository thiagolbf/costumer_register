import styled from "styled-components";

interface InputContainerProps {
  inputWidth: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  width: ${(props) => `${props.inputWidth}`};
  border: 2px solid var(--grey-200);
  border-radius: 2px;
  padding: 3px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  outline: 0;
  border: 0 none;

  ::placeholder {
    color: var(--grey-200);
    font-family: var(--roboto);
    font-weight: 500;
  }
`;
