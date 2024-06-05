import NavSimple from "../layout/NavSimple";
import { MaterialsProvider } from "../context/MaterialsContext";

import OrderPlacementForm from "../components/OrderPlacementForm";

const OrderPlacement = () => {
  return (
    <MaterialsProvider>
      <NavSimple>
        <OrderPlacementForm />
      </NavSimple>
    </MaterialsProvider>
  );
};

export default OrderPlacement;
