import { createContext, ReactNode, useState } from "react";

import { toast } from "react-toastify";

interface ProductsProviderData {
  products: Product[];
  registerNewProduct: (product: Product) => void;
}

interface ProductsProviderProps {
  children: ReactNode;
}

interface Product {
  name: string;
  active: string;
}

export const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  const registerNewProduct = (product: Product) => {
    setProducts([...products, product]);
    toast.success("Produto cadastrado com sucesso");
  };

  return (
    <ProductsContext.Provider value={{ products, registerNewProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
