import { data } from "../data/dataExample";

const useCalObra = () => {
  /**
   * @param {type: Array} data
   * @param {type: Array} dataEmpleado
   *
   */

  //funcion para darle a cada empleado los gastos por ciclo
  const SetBilltoEmployees = (data, dataEmpleado) => {
    empleado = data.empleados.find(
      (empleado) => empleado.id === dataEmpleado.id
    );
    empleado.finanzas[
      `cliclo ${length(empleado.finanzas) + 1}`
    ].horasTrabajadas = dataEmpleado.horasTrabajadas;
    empleado.finanzas[`cliclo ${length(empleado.finanzas)}`].beneficios =
      dataEmpleado.beneficios;
    empleado.finanzas[`cliclo ${length(empleado.finanzas)}`].gastosIndirectos =
      dataEmpleado.gastosIndirectos;
  };
  return { SetBilltoEmployees };
};
