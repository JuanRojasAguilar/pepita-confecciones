import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { getAllMaterials } from "../hooks/useMaterialApi";
import { useState, useRef, useEffect } from "react";

const OrderForm = ({ onFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });
  const form = useRef(null);
  const onSubmit = (data) => {
    console.log(data);
    onFormSubmit();
    form.current.reset();
  };
  const [materials, setMaterials] = useState([]);
  useEffect(() => {
    const materialData = getAllMaterials();
    setMaterials(materialData);
  }, []);

  const Styles = {
    form: `
      absolute 
      top-1/2 
      left-1/2 
      -translate-y-1/2 
      -translate-x-1/2 
      m-auto
      bg-blue-100
      rounded
      p-4
      box-border
      sm:w-1/3
      z-10
    `,
    fieldset: `
      flex
      mb-2
      flex-wrap
    `,
    fieldsetDiv: `
      flex
      justify-between
      w-full
    `,
    label: `
      me-2
    `,
    input: `
      flex-grow
      flex-shrink
      text-end
    `,
    inputNaN: `
      flex-grow
      flex-shrink
      text-end
    `,
    errorMessage: `
      text-red-700 
      text-xs 
      font-bold
    `,
    button: `
      bg-indigo-200 
      rounded 
      w-24 
      h-8 
      self-center
      mt-2
      w-full
    `,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={form} className={Styles.form}>
      <fieldset className={Styles.fieldset}>
        <div className={Styles.fieldsetDiv}>
          <label for="priceNumber" className={Styles.label}>
            Precio:{" "}
          </label>
          <input
            className={Styles.input}
            id="priceNumber"
            type="number"
            min={0}
            max={4294967295n}
            placeholder="Precio"
            {...register("price", {
              required: "Por favor ingresa un precio",
            })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="price"
          render={({ message }) => (
            <p className={Styles.errorMessage}>{message}</p>
          )}
        />
      </fieldset>

      <fieldset className={Styles.fieldset}>
        <div className={Styles.fieldsetDiv}>
          <label for="provider" className={Styles.label}>
            Proveedor:{" "}
          </label>
          <select></select>
          <input
            className={Styles.inputNaN}
            id="provider"
            placeholder="Proveedor"
            {...register("provider")}
          />
        </div>
      </fieldset>

      <fieldset className={Styles.fieldset}>
        <div className={Styles.fieldsetDiv}>
          <label for="quantity" className={Styles.label}>
            Cantidades:{" "}
          </label>
          <input
            className={Styles.input}
            id="quantity"
            type="number"
            min={0}
            placeholder="Ingrese la cantidad"
            {...register("cantidad", {
              required: "Por favor, ingresa una cantidad",
            })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="cantidad"
          render={({ message }) => (
            <p className={Styles.errorMessage}>{message}</p>
          )}
        />
      </fieldset>

      <button className={Styles.button} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default OrderForm;
