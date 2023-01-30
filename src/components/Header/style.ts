import styled, { css } from "styled-components";

interface HeaderProps {
  responsive: boolean;
}

export const Header = styled.header<HeaderProps>`
  background-color: var(--grey-300);
  overflow: hidden;

  font-family: var(--roboto);
  padding: 5px;

  > a {
    float: right;
    display: block;
    text-align: center;
    margin: 0 5px;
  }

  a:visited {
    color: var(--black-900);
  }

  > p {
    float: left;
    text-transform: uppercase;
    font-weight: 900;
  }

  svg.icon {
    display: none;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    a:not(:first-child) {
      display: none;
    }
    svg.icon {
      float: right;
      display: block;
    }

    ${(props) =>
      props.responsive &&
      css`
        position: relative;

        svg.icon {
          position: absolute;
          right: 0;
          top: 0;
        }

        > a:not(:first-child) {
          float: none;
          display: block;
          text-align: left;
          margin: 5px 0;
        }
        > p {
          float: none;
          text-align: left;
          margin-bottom: 20px;
        }
      `}
  }
`;
