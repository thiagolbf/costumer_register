import { Route, Routes } from "react-router-dom";

import { HeaderComponent } from "../components/Header";

import { RegisterProductPage } from "../pages/RegisterProduct";
import { RegisterCostumerPage } from "../pages/RegisterCostumer";

export const RoutesComponent = () => {
  return (
    <>
      <HeaderComponent />

      <Routes>
        <Route path="/registerproduct" element={<RegisterProductPage />} />
        <Route path="/registercostumer" element={<RegisterCostumerPage />} />
      </Routes>
    </>
  );
};
