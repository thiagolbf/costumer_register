import { createContext, ReactNode, useState } from "react";

interface ProductsProviderProps {
  children: ReactNode;
}

interface Product {
  name: string;
  active: boolean;
}

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
