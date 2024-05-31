import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import MaterialContext from "../context/MaterialsContext";

export default function ReactForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ criteriaMode: "all" });
  const onSubmit = data => console.log(data);
  const materialData = useContext(MaterialContext);
  console.log(materialData);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="flex gap-2">
        <label for="priceNumber">Precio: </label>
        <input
          id="priceNumber"
          type="number"
          min={0}
          max={4294967295n}
          placeholder="Precio"
          {...register("price", {
            required: "Por favor ingresa un precio"
          })} />
        <ErrorMessage
          errors={errors}
          name="price"
          render={({ message }) => <p className="text-red-500 font-bold">{message}</p>}
        />
      </fieldset>
      <fieldset className="flex gap-2">
        <label for="provider">Proveedor: </label>
        <input 
          id="provider"
          placeholder="Proveedor"
          {...register("provider")}
        />
      </fieldset>

      <fieldset className="flex gap-2">
        <label for="quantity">Cantidades: </label>
        <input
          id="quantity"
          type="number"
          min={0}
          placeholder="Ingrese la cantidad"
          {...register("cantidad", {
            required: "Por favor, ingresa una cantidad"
          })} 
        />
        <ErrorMessage
          errors={errors}
          name="cantidad"
          render={({ message }) => <p className="text-red-500 font-bold">{message}</p>}
        />
      </fieldset>

      <button
        className="bg-indigo-200 rounded w-24 h-8"
        type="submit"
      >
        Enviar
      </button>
    </form>
  )
}
