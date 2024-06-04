import { useState, createContext, useEffect } from "react";
import { getAllMaterials } from "../hooks/useMaterialApi";
import OrderForm from "../components/OrderForm";

const MaterialsContext = createContext();

const MaterialsProvider = ({ children }) => {
const { _, materials } = getAllMaterials();
  return (
    <MaterialsContext.Provider value={materials}>
      {children}
    </MaterialsContext.Provider>
  );
};

export { MaterialsContext, MaterialsProvider };
