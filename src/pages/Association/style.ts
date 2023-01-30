import styled from "styled-components";

export const AssociationContainer = styled.div`
  font-family: var(--roboto);

  h3 {
    text-align: center;
    font-weight: 900;
    margin: 20px;
  }

  > form {
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        > select {
          width: 200px;
          margin: 0 10px;
          text-align: center;
          font-size: 0.8rem;
        }
        > span {
          text-align: center;
        }

        > span.error {
          color: var(--error);
          font-size: 0.7rem;
        }
      }
    }

    > button {
      display: block;
      padding: 5px;
      margin: 20px auto;
    }
  }
`;
