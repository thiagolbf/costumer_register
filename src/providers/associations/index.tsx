import { createContext, ReactNode, useState } from "react";

import { toast } from "react-toastify";

interface AssociationsProviderProps {
  children: ReactNode;
}

interface AssociationsProviderData {
  associations: Association[];
  registerNewAssociation: (assotion: Association) => void;
  changeProductAssociate: (product: Product) => void;
  changeCostumerAssociate: (costumer: string, active: string) => void;
}

interface Association {
  costumer: string;
  email: string;
  active: string;
  productAssociate: Product;
}

interface Product {
  name: string;
  active: string;
}

export const AssociationsContext = createContext<AssociationsProviderData>(
  {} as AssociationsProviderData
);

export const AssociationsProvider = ({
  children,
}: AssociationsProviderProps) => {
  const [associations, setAssociations] = useState<Association[]>(
    [] as Association[]
  );

  const registerNewAssociation = (association: Association) => {
    const checkAssociation = associations.some((element) => {
      if (
        association.costumer === element.costumer &&
        association.productAssociate.name === element.productAssociate.name
      ) {
        return true;
      } else {
        return false;
      }
    });

    if (checkAssociation) {
      toast.warning("Essa associação já foi realizada");
    } else {
      setAssociations([...associations, association]);
      toast.success("Associação realizada com sucesso");
    }
  };

  const changeProductAssociate = (product: Product) => {
    const verify = associations.map((element) => {
      if (element.productAssociate.name === product.name) {
        if (product.active === "true") {
          element.productAssociate.active = "false";
          return element;
        } else if (product.active === "false") {
          element.productAssociate.active = "true";
          return element;
        }
      } else {
        return element;
      }
    }) as NonNullable<Association[]>;

    setAssociations(verify);
  };

  const changeCostumerAssociate = (costumer: string, active: string) => {
    const verify = associations.map((element) => {
      if (element.costumer === costumer) {
        if (active === "true") {
          element.active = "false";
          return element;
        } else if (active === "false") {
          element.active = "true";
          return element;
        }
      } else {
        return element;
      }
    }) as NonNullable<Association[]>;

    setAssociations(verify);
  };

  return (
    <AssociationsContext.Provider
      value={{
        associations,
        registerNewAssociation,
        changeProductAssociate,
        changeCostumerAssociate,
      }}
    >
      {children}
    </AssociationsContext.Provider>
  );
};
