import { Route, Routes } from "react-router-dom";

import { HeaderComponent } from "../components/Header";

import { RegisterProductPage } from "../pages/RegisterProduct";
import { RegisterCostumerPage } from "../pages/RegisterCostumer";
import { AssociationPage } from "../pages/Association";
import { ListPage } from "../pages/List";

export const RoutesComponent = () => {
  return (
    <>
      <HeaderComponent />

      <Routes>
        <Route path="/registerproduct" element={<RegisterProductPage />} />
        <Route path="/registercostumer" element={<RegisterCostumerPage />} />
        <Route path="/association" element={<AssociationPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </>
  );
};
