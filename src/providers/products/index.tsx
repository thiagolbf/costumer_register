import { createContext, ReactNode, useState } from "react";

import { toast } from "react-toastify";

interface ProductsProviderData {
  products: Product[];
  registerNewProduct: (product: Product) => void;
  changeProductActive: (product: Product) => void;
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
    const checkProduct = products.some((element) => {
      if (element.name === product.name) {
        return true;
      } else {
        return false;
      }
    });

    if (checkProduct) {
      toast.warning("Essa produto já foi cadastrado");
    } else {
      setProducts([...products, product]);
      toast.success("Produto cadastrado com sucesso");
    }
  };

  const changeProductActive = (product: Product) => {
    const verify = products.map((element) => {
      if (element.name === product.name) {
        if (product.active === "true") {
          element.active = "false";
          return element;
        } else if (product.active === "false") {
          element.active = "true";
          return element;
        }
      } else {
        return element;
      }
    }) as NonNullable<Product[]>;

    setProducts(verify);
  };

  return (
    <ProductsContext.Provider
      value={{ products, registerNewProduct, changeProductActive }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
