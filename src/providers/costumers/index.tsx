import { createContext, ReactNode, useState } from "react";

import { toast } from "react-toastify";

interface CostumersProviderData {
  costumers: Costumer[];
  registerNewCostumer: (costumer: Costumer) => void;
  changeCostumerActive: (costumer: Costumer) => void;
}

interface CostumersProviderProps {
  children: ReactNode;
}

interface Costumer {
  name: string;
  cpf: string;
  phone: string;
  email: string;
  active: string;
}

export const CostumersContext = createContext<CostumersProviderData>(
  {} as CostumersProviderData
);

export const CostumersProvider = ({ children }: CostumersProviderProps) => {
  const [costumers, setCostumers] = useState<Costumer[]>([] as Costumer[]);

  const registerNewCostumer = (costumer: Costumer) => {
    const checkCostumer = costumers.some((element) => {
      if (element.name === costumer.name) {
        return true;
      } else {
        return false;
      }
    });

    if (checkCostumer) {
      toast.warning("Essa cliente já foi cadastrado");
    } else {
      setCostumers([...costumers, costumer]);
      toast.success("Cliente cadastrado com sucesso");
    }
  };

  const changeCostumerActive = (costumer: Costumer) => {
    const verify = costumers.map((element) => {
      if (element.name === costumer.name) {
        if (costumer.active === "true") {
          element.active = "false";
          return element;
        } else if (costumer.active === "false") {
          element.active = "true";
          return element;
        }
      } else {
        return element;
      }
    }) as NonNullable<Costumer[]>;

    setCostumers(verify);
  };

  return (
    <CostumersContext.Provider
      value={{ costumers, registerNewCostumer, changeCostumerActive }}
    >
      {children}
    </CostumersContext.Provider>
  );
};
