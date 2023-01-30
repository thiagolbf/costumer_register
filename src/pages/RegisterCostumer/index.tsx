import { InputComponent } from "../../components/Input";
import { ButtonComponent } from "../../components/Button";
import { RegisterCostumerContainer } from "./style";

import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { BsPerson } from "react-icons/bs";
import { TiDocument } from "react-icons/ti";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import { useContext } from "react";
import { CostumersContext } from "../../providers/costumers";

interface CostumerData {
  name: string;
  cpf: string;
  phone: string;
  email: string;
  active: string;
}

export const RegisterCostumerPage = () => {
  const { registerNewCostumer } = useContext(CostumersContext);

  const [costumerValues, setCostumerValues] = useState({
    cpf: "",
    cel: "",
  });

  // ------- CPF FORMAT ----------

  const handleChangeCpfInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 9) {
      event.target.value = event.target.value.replace(/(\d{3})(?=\d)/g, "$1.");
    } else {
      event.target.value = event.target.value.replace(
        /(\d{3})(\d{1})(?=\d)/g,
        "$1-$2"
      );
    }

    setCostumerValues({ ...costumerValues, cpf: event.target.value });
  };

  const handleChangeCelInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 3) {
      event.target.value = event.target.value.replace(/^(\d{2})/, "($1)");
    } else {
      event.target.value = event.target.value.replace(
        /(\d{5})(\d{4})/,
        "$1-$2"
      );

      setCostumerValues({ ...costumerValues, cel: event.target.value });
    }
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    active: yup.string().nullable().required("Selecione uma opção"),
    cpf: yup
      .string()
      .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido")
      .required("CPF é obrigatório")
      .min(14, "O CPF deve ter no mínimo 11 digitos")
      .max(14, "O CPF deve ter no máximo 11 digitos"),
    phone: yup
      .string()
      .matches(/^\(\d{2}\)\d{5}-\d{4}$/, "Celular inválido")
      .required("Número de celular obrigatório")
      .min(14, "Número do celular deve ter 9 digitos")
      .max(14, "Número do celular deve ter 9 digitos"),
    email: yup
      .string()
      .email("Formato de email incorreto")
      .required("Email obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CostumerData>({ resolver: yupResolver(formSchema) });

  const registerCostumer = (costumer: CostumerData) => {
    registerNewCostumer(costumer);
    reset();
  };

  return (
    <>
      <RegisterCostumerContainer>
        <h3>Cadastrar Cliente</h3>

        <form onSubmit={handleSubmit(registerCostumer)}>
          <InputComponent
            inputWidth="300px"
            icon={<BsPerson />}
            placeholder="Nome completo"
            type="text"
            {...register("name")}
          />
          {!!errors.name ? <span>{errors.name?.message}</span> : null}
          <InputComponent
            inputWidth="300px"
            icon={<TiDocument />}
            placeholder="CPF"
            type="text"
            {...register("cpf")}
            onChange={handleChangeCpfInput}
            maxLength={14}
          />
          {!!errors.cpf ? <span>{errors.cpf?.message}</span> : null}
          <InputComponent
            inputWidth="300px"
            icon={<AiOutlinePhone />}
            placeholder="Celular"
            type="text"
            {...register("phone")}
            onChange={handleChangeCelInput}
            maxLength={14}
          />
          {!!errors.phone ? <span>{errors.phone?.message}</span> : null}
          <InputComponent
            inputWidth="300px"
            icon={<AiOutlineMail />}
            placeholder="Email"
            type="text"
            {...register("email")}
          />
          {!!errors.email ? <span>{errors.email?.message}</span> : null}

          <p>Cliente ativo?</p>
          <div>
            <span>Sim</span>
            <input type="radio" {...register("active")} value="true" />
            <span>Não</span>
            <input type="radio" {...register("active")} value="false" />
            {!!errors.active ? <span>{errors.active?.message}</span> : null}
          </div>
          <ButtonComponent type="submit">Cadastrar</ButtonComponent>
        </form>
      </RegisterCostumerContainer>
    </>
  );
};
