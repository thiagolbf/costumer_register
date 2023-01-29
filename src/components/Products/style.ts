import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > p {
    margin: 2px 0;
    word-wrap: break-word;
  }

  font-family: var(--roboto);
  font-size: 0.8rem;

  width: 250px;
  padding: 5px;
  margin: 5px;

  border: 1px solid var(--black-400);
  border-radius: 5px;

  box-shadow: 5px 5px 15px -9px var(--black-400);
`;
