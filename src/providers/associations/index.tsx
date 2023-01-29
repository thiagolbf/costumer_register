import { createContext, ReactNode, useState } from "react";

import { toast } from "react-toastify";

interface AssociationsProviderProps {
  children: ReactNode;
}

interface AssociationsProviderData {
  associations: Association[];
  registerNewAssociation: (assotion: Association) => void;
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

    console.log(checkAssociation);
    if (checkAssociation) {
      toast.warning("Essa associação já foi realizada");
    } else {
      setAssociations([...associations, association]);
      toast.success("Associação realizada com sucesso");
    }
  };

  return (
    <AssociationsContext.Provider
      value={{ associations, registerNewAssociation }}
    >
      {children}
    </AssociationsContext.Provider>
  );
};
