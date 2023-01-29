import { ProductContainer } from "./style";

import { useContext } from "react";
import { ProductsContext } from "../../providers/products";
import { AssociationsContext } from "../../providers/associations";

interface Product {
  name: string;
  active: string;
}

export const ProductContainerComponent = ({ name, active }: Product) => {
  const { changeProductActive } = useContext(ProductsContext);
  const { changeProductAssociate } = useContext(AssociationsContext);

  let translateActive = "";

  if (active === "true") {
    translateActive = "sim";
  } else {
    translateActive = "não";
  }

  return (
    <>
      <ProductContainer>
        <p>Nome do produto: {name}</p>
        <p>Ativo: {translateActive}</p>
        <button
          onClick={() => {
            changeProductActive({ name, active });
            changeProductAssociate({ name, active });
          }}
        >
          Alteração situação do produto
        </button>
      </ProductContainer>
    </>
  );
};
