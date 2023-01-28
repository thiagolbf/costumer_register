import styled from "styled-components";

export const RegisterCostumerContainer = styled.div`
  font-family: var(--roboto);
  text-align: center;

  h3 {
    padding: 15px;
  }

  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      margin: 5px;
    }
    > span {
      color: var(--error);
      font-size: 0.7rem;
    }

    > p {
      margin: 10px;
    }

    > div {
      span:not(:last-child) {
        margin: 10px 10px;
      }

      span:last-child {
        display: block;
        color: var(--error);
        font-size: 0.7rem;
      }
    }

    > button {
      margin: 10px;
    }
  }
`;
