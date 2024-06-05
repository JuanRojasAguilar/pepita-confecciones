import MaterialOrderForm from "../components/MaterialOrderForm";
import NavSimple from "../layout/NavSimple";
import { MaterialsProvider } from "../context/MaterialsContext";

const MaterialOrderPlacement = () => {
  return (
    <MaterialsProvider>
      <NavSimple>
        <MaterialOrderForm />
      </NavSimple>
    </MaterialsProvider>
  );
};

export default MaterialOrderPlacement;
