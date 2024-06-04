import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useRef, useContext } from "react";
import { MaterialsContext } from "../context/MaterialsContext";

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

  const materials = useContext(MaterialsContext);

  const Styles = {
    form: `
      flex
      flex-col
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
      sm:w-4/5
      lg:w-1/3
      landscape:lg:w-3/5
      landscape:2xl:w-1/3
      z-10
      shadow-xl
      shadow-gray-700
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
      sm:h-8
    `,
    label: `
      me-2
      sm:text-xl
    `,
    input: `
      flex-grow
      flex-shrink
      text-end
      sm:text-xl
    `,
    inputNaN: `
      flex-grow
      flex-shrink
      text-end
      sm:text-xl
      landscape:sm:pe-4
    `,
    errorMessage: `
      text-red-700 
      text-xs 
      font-bold
      sm:text-sm
    `,
    button: `
      bg-indigo-400 
      rounded 
      w-24 
      h-8 
      sm:h-12
      self-center
      mt-2
      self-center
      sm:w-1/3
      sm:text-2xl
    `,
  };

  return (
    <form
      onSubmit={() => handleSubmit(onSubmit)}
      ref={form}
      className={Styles.form}
    >
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
          <select name="materials" id="materials" className={Styles.input}>
            {materials && materials.map((material) => {
              return (
                <option value={material.proveedor} key={material.id}>
                  {material.proveedor}
                </option>
              );
            })}
          </select>
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
