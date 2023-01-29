import { useState } from "react";

import { Header } from "./style";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

export const HeaderComponent = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <>
      <Header responsive={responsive}>
        <p>data stone</p>
        <Link to="/registercostumer">Cadastro cliente</Link>
        <Link to="/registerproduct">Cadastro produto</Link>
        <Link to="/association">Associação de produtos</Link>
        <Link to="/list">Lista</Link>
        <GiHamburgerMenu
          className="icon"
          onClick={() => setResponsive(!responsive)}
        />
      </Header>
    </>
  );
};
