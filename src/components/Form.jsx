import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function ReactForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ criteriaMode: "all" });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Precio: </label>
        <input placeholder="precio" {...register("example")} />
      </fieldset>
      <fieldset>
        <label>Proveedor: </label>
        <input placeholder="precio" />
      </fieldset>
      <fieldset>
        <label>Cantidades: </label>
        <input
          placeholder="Ingrese la cantidad"
          {...register("multipleErrorInput", {
            required: true,
            pattern: {
              value: /d+/,
              message: "Por favor, escribe un numero"
            }
          })} />
      </fieldset>
      <ErrorMessage
        errors={errors}
        name="singleErrorInput"
        render={({ message }) => <p>{message}</p>}
        
      />

      <input type="submit" />
    </form>
  );
}