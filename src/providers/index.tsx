import { ReactNode } from "react";

import { ProductsProvider } from "./products";
import { CostumersProvider } from "./costumers";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <ProductsProvider>
        <CostumersProvider>{children}</CostumersProvider>
      </ProductsProvider>
    </>
  );
};
