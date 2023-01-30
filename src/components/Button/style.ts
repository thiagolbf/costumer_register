import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 5px;

  padding: 5px;

  border-radius: 3px;

  background-color: var(--grey-600);
  color: var(--white-999);
  font-family: var(--roboto);

  &:hover {
    opacity: 0.5;
    transition: 0.2s ease-out;
  }
`;
