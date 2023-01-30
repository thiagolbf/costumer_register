import { ReactNode } from "react";

import { ProductsProvider } from "./products";
import { CostumersProvider } from "./costumers";
import { AssociationsProvider } from "./associations";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <ProductsProvider>
        <CostumersProvider>
          <AssociationsProvider>{children}</AssociationsProvider>
        </CostumersProvider>
      </ProductsProvider>
    </>
  );
};
