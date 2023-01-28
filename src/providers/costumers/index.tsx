import { createContext, ReactNode, useState } from "react";

import { toast } from "react-toastify";

interface CostumersProviderData {
  costumers: Costumer[];
  registerNewCostumer: (costumer: Costumer) => void;
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
    setCostumers([...costumers, costumer]);
    toast.success("Cliente cadastrado com sucesso");
  };

  return (
    <CostumersContext.Provider value={{ costumers, registerNewCostumer }}>
      {children}
    </CostumersContext.Provider>
  );
};
