import { useState } from "react";

import { Header } from "./style";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

export const HeaderComponent = () => {
  const [responsive, setResponsive] = useState(false);

  console.log(responsive);
  return (
    <>
      <Header responsive={responsive}>
        <p>data stone</p>
        <Link to="/teste">Cadastro cliente</Link>
        <Link to="/teste">Cadastro produto</Link>
        <Link to="/teste">Associação de produtos</Link>
        <Link to="/teste">Listagem</Link>
        <GiHamburgerMenu
          className="icon"
          onClick={() => setResponsive(!responsive)}
        />
      </Header>
    </>
  );
};