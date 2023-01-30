import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;

  margin-top: 10px;

  > button {
    width: 100px;
    margin: 10px 10px;
  }
`;

export const ListContainer = styled.div`
  font-family: var(--roboto);

  h3 {
    text-align: center;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin-top: 20px;

    font-family: var(--roboto);
  }
`;
