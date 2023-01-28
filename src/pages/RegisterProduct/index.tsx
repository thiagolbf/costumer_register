import { RegisterProductContainer } from "./style";

import { InputComponent } from "../../components/Input";
import { AiOutlineFilePpt } from "react-icons/ai";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { ProductsContext } from "../../providers/products";

interface Product {
  name: string;
  active: string;
}

export const RegisterProductPage = () => {
  const { registerNewProduct } = useContext(ProductsContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Digite o nome do produto"),
    active: yup.string().nullable().required("Selecione uma opção"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>({ resolver: yupResolver(formSchema) });

  const registerProduct = (product: Product) => {
    registerNewProduct(product);
    reset();
  };

  return (
    <>
      <RegisterProductContainer>
        <h3>Registrar Produto</h3>

        <form onSubmit={handleSubmit(registerProduct)}>
          <InputComponent
            inputWidth="300px"
            icon={<AiOutlineFilePpt />}
            placeholder="Nome do produto"
            type="text"
            {...register("name")}
          />
          {!!errors.name ? <span>{errors.name?.message}</span> : null}

          <p>Produto ativo?</p>
          <div>
            <span>Sim</span>
            <input type="radio" {...register("active")} value="true" />
            <span>Não</span>
            <input type="radio" {...register("active")} value="false" />
            {!!errors.active ? <span>{errors.active?.message}</span> : null}
          </div>
          <button type="submit">Registrar</button>
        </form>
      </RegisterProductContainer>
    </>
  );
};
