import { CostumerContainer } from "./style";

import { useContext } from "react";
import { CostumersContext } from "../../providers/costumers";
import { AssociationsContext } from "../../providers/associations";

interface Costumer {
  name: string;
  cpf: string;
  phone: string;
  email: string;
  active: string;
}

export const CostumerContainerComponent = ({
  name,
  cpf,
  phone,
  email,
  active,
}: Costumer) => {
  const { changeCostumerActive } = useContext(CostumersContext);
  const { changeCostumerAssociate } = useContext(AssociationsContext);

  let translateActive = "";

  if (active === "true") {
    translateActive = "sim";
  } else {
    translateActive = "não";
  }

  return (
    <>
      <CostumerContainer>
        <p>Nome: {name}</p>
        <p>CPF: {cpf}</p>
        <p>Celular: {phone}</p>
        <p>Email: {email}</p>
        <p>Ativo: {translateActive}</p>
        <button
          onClick={() => {
            changeCostumerActive({ name, cpf, phone, email, active });
            changeCostumerAssociate(name, active);
          }}
        >
          Alterar situação do cliente
        </button>
      </CostumerContainer>
    </>
  );
};
