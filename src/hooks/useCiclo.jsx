const useCiclo = () => {
  /**
   *
   * @param {type: Strng} data
   * @returns {type: float} total de gastos mano obra
   */

  const setBillLabor = (data) => {
    let sumaBillSalary;
    let sumaBillBeneficios;
    let sumabillInderectos;
    data.empleados.forEach((empleado) => {
      sumaBillSalary +=
        empleado.salarioBaseHora *
        empleado.finanzas[`cilco ${empleado.finanzas.length()}`]
          .horasTrabajadas;
      sumaBillBeneficios +=
        empleado.finanzas[`cilco ${empleado.finanzas.length()}`].beneficios;
      sumabillInderectos +=
        empleado.finanzas[`cilco ${empleado.finanzas.length()}`]
          .gastosIndirectos;
    });

    data.ciclos[`ciclo ${empleado.finanzas.length()}`].gastos[
      "gastosManoObra"
    ] = sumaBillSalary + sumaBillBeneficios + sumabillInderectos;
  };

  return { setBillLabor };
};
