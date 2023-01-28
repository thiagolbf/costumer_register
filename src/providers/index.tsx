import { ReactNode } from "react";

import { ProductsProvider } from "./products";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <ProductsProvider>{children}</ProductsProvider>
    </>
  );
};
