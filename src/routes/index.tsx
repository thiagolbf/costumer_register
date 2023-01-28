import { Route, Routes } from "react-router-dom";

import { HeaderComponent } from "../components/Header";

import { RegisterProductPage } from "../pages/RegisterProduct";

export const RoutesComponent = () => {
  return (
    <>
      <HeaderComponent />

      <Routes>
        <Route path="/registerproduct" element={<RegisterProductPage />} />
      </Routes>
    </>
  );
};
