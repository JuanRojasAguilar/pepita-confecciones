import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { getAllMaterials, postMaterial } from "../hooks/useMaterialApi";
import { useState, useRef, useEffect } from "react";

const OrderForm = ({ onFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const form = useRef(null);
  const onSubmit = (materialData) => {
    console.log(materialData);
    postMaterial(materialData);
    onFormSubmit();
    form.current.reset();
  };
  // const [materials, setMaterials] = useState([]);
  // useEffect(() => {
  //   const materialData = getAllMaterials();
  //   setMaterials(materialData);
  // }, []);

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
    <form onSubmit={handleSubmit(onSubmit)} ref={form} className={Styles.form}>
      {/*primer question*/}
      <fieldset className={Styles.fieldset}>
        <div className={Styles.fieldsetDiv}>
          <label for="IdMateriaPrima" className={Styles.label}>
            IdMateriaPrima:{" "}
          </label>
          <input
            className={Styles.input}
            id="IdMateriaPrima"
            type="text"
            // min={0}
            // max={4294967295n}
            placeholder="Id"
            {...register("id", {
              required: "Por favor ingresa el id",
            })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="IdMaterials"
          render={({ message }) => (
            <p className={Styles.errorMessage}>{message}</p>
          )}
        />
      </fieldset>

      <fieldset className={Styles.fieldset}>
        <div className={Styles.fieldsetDiv}>
          <label for="Nombre" className={Styles.label}>
            Nombre:{" "}
          </label>
          <input
            className={Styles.input}
            id="Nombre"
            type="text"
            // min={0}
            // max={4294967295n}
            placeholder="Nombre"
            {...register("Nombre", {
              required: "Por favor ingresa el nombre",
            })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="NombreMaterials"
          render={({ message }) => (
            <p className={Styles.errorMessage}>{message}</p>
          )}
        />
      </fieldset>

      <fieldset className={Styles.fieldset}>
        <div className={Styles.fieldsetDiv}>
          <label htmlFor="description" className={Styles.label}>
            Descripción:
          </label>
          <input
            className={Styles.input}
            id="description"
            type="text"
            placeholder="Descripción"
            {...register("description", {
              required: "Por favor ingresa la descripción",
            })}
          />
        </div>
      </fieldset>
      <fieldset className={Styles.fieldset}>
        <div className={Styles.fieldsetDiv}>
          <label htmlFor="categoria" className={Styles.label}>
            Categoría:
          </label>
          <input
            className={Styles.input}
            id="categoria"
            type="text"
            placeholder="Categoría"
            {...register("categoria", {
              required: "Por favor ingresa la categoría",
            })}
          />
        </div>
      </fieldset>
      <fieldset className={Styles.fieldset}>
        <div className={Styles.fieldsetDiv}>
          <label htmlFor="proveedor" className={Styles.label}>
            Proveedor:
          </label>
          <input
            className={Styles.input}
            id="proveedor"
            type="text"
            placeholder="Proveedor"
            {...register("proveedor", {
              required: "Por favor ingresa el proveedor",
            })}
          />
        </div>
      </fieldset>

      <fieldset className={Styles.fieldset}>
        <div className={Styles.fieldsetDiv}>
          <label htmlFor="costoPorUnidad" className={Styles.label}>
            Costo por Unidad:
          </label>
          <input
            className={Styles.input}
            id="costoPorUnidad"
            type="number"
            step="0.01"
            placeholder="Costo por Unidad"
            {...register("costoPorUnidad", {
              required: "Por favor ingresa el costo por unidad",
            })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="costoPorUnidad"
          render={({ message }) => (
            <p className={Styles.errorMessage}>{message}</p>
          )}
        />
      </fieldset>

      <fieldset className={Styles.fieldset}>
        <div className={Styles.fieldsetDiv}>
          <label htmlFor="unidadDeMedida" className={Styles.label}>
            Unidad de Medida:
          </label>
          <input
            className={Styles.input}
            id="unidadDeMedida"
            type="text"
            placeholder="Unidad de Medida"
            {...register("unidadDeMedida", {
              required: "Por favor ingresa la unidad de medida",
            })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="unidadDeMedida"
          render={({ message }) => (
            <p className={Styles.errorMessage}>{message}</p>
          )}
        />
      </fieldset>

      <fieldset className={Styles.fieldset}>
        <div className={Styles.fieldsetDiv}>
          <label htmlFor="cantidadEnStock" className={Styles.label}>
            Cantidad en Stock:
          </label>
          <input
            className={Styles.input}
            id="cantidadEnStock"
            type="number"
            placeholder="Cantidad en Stock"
            {...register("cantidadEnStock", {
              required: "Por favor ingresa la cantidad en stock",
            })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="cantidadEnStock"
          render={({ message }) => (
            <p className={Styles.errorMessage}>{message}</p>
          )}
        />
      </fieldset>

      <fieldset className={Styles.fieldset}>
        <div className={Styles.fieldsetDiv}>
          <label htmlFor="ubicacionEnAlmacen" className={Styles.label}>
            Ubicación en Almacén:
          </label>
          <input
            className={Styles.input}
            id="ubicacionEnAlmacen"
            type="text"
            placeholder="Ubicación en Almacén"
            {...register("ubicacionEnAlmacen", {
              required: "Por favor ingresa la ubicación en almacén",
            })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="ubicacionEnAlmacen"
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
