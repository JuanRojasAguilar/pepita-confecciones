import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function ReactForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ criteriaMode: "all" });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="flex gap-2">
        <label>Precio: </label>
        <input
          type="number"
          placeholder="precio"
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
        <label>Proveedor: </label>
        <input placeholder="proveedor" />
      </fieldset>

      <fieldset className="flex gap-2">
        <label>Cantidades: </label>
        <input
          type="number"
          placeholder="Ingrese la cantidad"
          {...register("cantidad", {
            required: "Por favor, ingresa una cantidad"
          })} />
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
  );
}