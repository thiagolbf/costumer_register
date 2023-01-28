import { createContext, ReactNode, useState } from "react";

interface CostumersProviderProps {
  children: ReactNode;
}

interface Costumer {
  name: string;
  cpf: string;
  phone: string;
  email: string;
  active: boolean;
}

export const CostumersContext = createContext({});

export const CostumersProvider = ({ children }: CostumersProviderProps) => {
  const [costumers, setCostumers] = useState<Costumer[]>([] as Costumer[]);

  return (
    <CostumersContext.Provider value={{ costumers }}>
      {children}
    </CostumersContext.Provider>
  );
};
