import { ButtonsContainer, ListContainer } from "./style";

import { ButtonComponent } from "../../components/Button";

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
        <ButtonComponent
          onClick={() => {
            setShowAssociations(false);
            setShowCostumers(false);
            setShowProducts(!showProducts);
          }}
        >
          Produtos
        </ButtonComponent>
        <ButtonComponent
          onClick={() => {
            setShowAssociations(false);
            setShowProducts(false);
            setShowCostumers(!showCostumers);
          }}
        >
          Clientes
        </ButtonComponent>
        <ButtonComponent
          onClick={() => {
            setShowProducts(false);
            setShowCostumers(false);
            setShowAssociations(!showAssociations);
          }}
        >
          Associações
        </ButtonComponent>
      </ButtonsContainer>

      <ListContainer>
        {showProducts && products.length > 0 ? (
          <>
            <h3>Produtos cadastrados</h3>
            <div>
              {products.map((element, index) => {
                return (
                  <ProductContainerComponent
                    key={index}
                    name={element.name}
                    active={element.active}
                  />
                );
              })}
            </div>
          </>
        ) : showProducts && products.length < 1 ? (
          <h3>Nenhum produto cadastrado</h3>
        ) : null}

        {showCostumers && costumers.length > 0 ? (
          <>
            <h3>Clientes cadastrados</h3>
            <div>
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
            </div>
          </>
        ) : showCostumers && costumers.length < 1 ? (
          <h3>Nenhum cliente cadastrado</h3>
        ) : null}

        {showAssociations && associations.length > 0 ? (
          <>
            <h3>Associações realizadas</h3>
            <div>
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
            </div>
          </>
        ) : showAssociations && associations.length < 1 ? (
          <h3>Nenhuma associação realizada</h3>
        ) : null}
      </ListContainer>
    </>
  );
};
