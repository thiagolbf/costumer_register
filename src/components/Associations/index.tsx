import { ProductContainer } from "../Products/style";
import { AssociationContainer } from "./style";

interface Association {
  costumer: string;
  email: string;
  active: string;
  name: string;
  activeProduct: string;
}

export const AssociationContainerComponent = ({
  costumer,
  email,
  active,
  name,
  activeProduct,
}: Association) => {
  let translateCostumerActive = "";
  let translateProductActive = "";

  if (active === "true") {
    translateCostumerActive = "sim";
  } else {
    translateCostumerActive = "não";
  }

  if (activeProduct === "true") {
    translateProductActive = "sim";
  } else {
    translateProductActive = "não";
  }

  return (
    <>
      <AssociationContainer>
        <p>Cliente: {costumer}</p>
        <p>Email: {email}</p>
        <p>Ativo: {translateCostumerActive}</p>
        <h5>Produto associado</h5>
        <p>Nome do protudo: {name}</p>
        <p>Ativo: {translateProductActive}</p>
      </AssociationContainer>
    </>
  );
};
