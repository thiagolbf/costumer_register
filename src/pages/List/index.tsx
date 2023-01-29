import { ButtonsContainer, ListContainer } from "./style";

import { useState } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../providers/products";
import { CostumersContext } from "../../providers/costumers";
import { AssociationsContext } from "../../providers/associations";

import { ProductContainerComponent } from "../../components/Products";
import { CostumerContainerComponent } from "../../components/Costumers";
import { AssociationContainerComponent } from "../../components/Associations";

export const ListPage = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showCostumers, setShowCostumers] = useState(false);
  const [showAssociations, setShowAssociations] = useState(false);

  const { products } = useContext(ProductsContext);
  const { costumers } = useContext(CostumersContext);
  const { associations } = useContext(AssociationsContext);

  return (
    <>
      <ButtonsContainer>
        <button
          onClick={() => {
            setShowAssociations(false);
            setShowCostumers(false);
            setShowProducts(!showProducts);
          }}
        >
          Produtos
        </button>
        <button
          onClick={() => {
            setShowAssociations(false);
            setShowProducts(false);
            setShowCostumers(!showCostumers);
          }}
        >
          Clientes
        </button>
        <button
          onClick={() => {
            setShowProducts(false);
            setShowCostumers(false);
            setShowAssociations(!showAssociations);
          }}
        >
          Associações
        </button>
      </ButtonsContainer>

      <ListContainer>
        {showProducts ? (
          <>
            {products.map((element, index) => {
              return (
                <ProductContainerComponent
                  key={index}
                  name={element.name}
                  active={element.active}
                />
              );
            })}
          </>
        ) : null}

        {showCostumers ? (
          <>
            {costumers.map((element, index) => {
              return (
                <CostumerContainerComponent
                  key={index}
                  name={element.name}
                  cpf={element.cpf}
                  phone={element.phone}
                  email={element.email}
                  active={element.active}
                />
              );
            })}
          </>
        ) : null}

        {showAssociations ? (
          <>
            {associations.map((element, index) => {
              return (
                <AssociationContainerComponent
                  key={index}
                  costumer={element.costumer}
                  email={element.email}
                  active={element.active}
                  name={element.productAssociate.name}
                  activeProduct={element.productAssociate.active}
                />
              );
            })}
          </>
        ) : null}
      </ListContainer>
    </>
  );
};
