import { data } from "../data/dataExample";

/**
 * @param {type: Array} dataCiclo
 *
 */

//funcion para darle a cada empleado los gastos por ciclo
export const SetBilltoEmployees = (dataCiclo) => {
  empleado = data.empleados.find((empleado) => empleado.id === dataCiclo.id);
  empleado.finanzas[`cliclo ${length(empleado.finanzas) + 1}`].horasTrabajadas =
    dataCiclo.horasTrabajadas;
  empleado.finanzas[`cliclo ${length(empleado.finanzas)}`].beneficios =
    dataCiclo.beneficios;
  empleado.finanzas[`cliclo ${length(empleado.finanzas)}`].gastosIndirectos =
    dataCiclo.gastosIndirectos;
};

/**
 *
 * @param {type: Strng} ciclo
 * @returns {type: float} total de gastos mano obra
 */

export const setBillLabor = (ciclo) => {
  let sumaBillSalary;
  let sumaBillBeneficios;
  let sumabillInderectos;
  data.empleados.forEach((empleado) => {
    sumaBillSalary +=
      empleado.salarioBaseHora * empleado.finanzas.ciclo.horasTrabajadas;
    sumaBillBeneficios += empleado.finanzas.ciclo.beneficios;
    sumabillInderectos += empleado.finanzas.ciclo.gastosIndirectos;
  });

  return sumaBillBeneficios + sumaBillSalary + sumabillInderectos;
};
