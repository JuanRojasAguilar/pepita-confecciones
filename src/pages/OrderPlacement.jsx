import OrderForm from "../components/OrderForm";
import NavSimple from "../layout/NavSimple";
import { MaterialsProvider } from "../context/MaterialsContext";

const OrderPlacement = () => {
  return (
    <MaterialsProvider>
      <NavSimple>
        <OrderForm />
      </NavSimple>
    </MaterialsProvider>
  );
};

export default OrderPlacement;
