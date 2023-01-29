import { AssociationContainer } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { ProductsContext } from "../../providers/products";
import { CostumersContext } from "../../providers/costumers";
import { AssociationsContext } from "../../providers/associations";

interface Association {
  costumername: string;
  productname: string;
}

export const AssociationPage = () => {
  const { products } = useContext(ProductsContext);
  const { costumers } = useContext(CostumersContext);
  const { registerNewAssociation } = useContext(AssociationsContext);

  const formSchema = yup.object().shape({
    costumername: yup.string().min(1, "Selecione o nome do cliente"),
    productname: yup.string().min(1, "Selecione o produto"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Association>({ resolver: yupResolver(formSchema) });

  const associationCostumer = (data: Association) => {
    const filteredProduct = products.filter(
      (element) => element.name === data.productname
    );

    const filteredCostumer = costumers.filter(
      (element) => element.name === data.costumername
    );

    const association = {
      costumer: filteredCostumer[0].name,
      email: filteredCostumer[0].email,
      active: filteredCostumer[0].active,
      productAssociate: {
        name: filteredProduct[0].name,
        active: filteredProduct[0].active,
      },
    };
    registerNewAssociation(association);
  };

  return (
    <>
      <AssociationContainer>
        <h3>Associar Clientes a Produtos</h3>

        <form onSubmit={handleSubmit(associationCostumer)}>
          <div>
            <div>
              <span>Selecione o cliente</span>
              <select {...register("costumername")}>
                <option value="">Selecione o cliente</option>
                {costumers.map((element, index) => {
                  if (element.active === "true") {
                    return (
                      <option key={index} value={element.name}>
                        {element.name}
                      </option>
                    );
                  }
                })}
              </select>
              {!!errors.costumername ? (
                <span>{errors.costumername?.message}</span>
              ) : null}
            </div>
            <div>
              <span>Selecione o produto</span>
              <select {...register("productname")}>
                <option value="">Selecione o produto</option>
                {products.map((element, index) => {
                  if (element.active === "true") {
                    return (
                      <option key={index} value={element.name}>
                        {element.name}
                      </option>
                    );
                  }
                })}
              </select>
              {!!errors.productname ? (
                <span>{errors.productname?.message}</span>
              ) : null}
            </div>
          </div>
          <button type="submit">Associar</button>
        </form>
      </AssociationContainer>
    </>
  );
};
