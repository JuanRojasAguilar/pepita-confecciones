/**
 *
 * @param {type: Array} data
 * @return {type: float }
 */
const productivity = (data) => {
  let productFinish =
    data.ciclos[`${data.ciclos.lenght() - 1}`].cantidadProducidos;
  let tiempoPorducido =
    data.ciclos[`${data.ciclos.lenght() - 1}`].tiempoProducoido;

  return productFinish / tiempoPorducido;
};

/**
 *
 * @param {type: Array} data
 * @return {type: float }
 */
const costOperativeUnity = (data) => {
  let costOperatingTotal =
    data.ciclos[`${data.ciclos.lenght() - 1}`].gastos.gastosMateriaPrima +
    data.ciclos[`${data.ciclos.lenght() - 1}`].gastos.gastosManoObra +
    data.ciclos[`${data.ciclos.lenght() - 1}`].gastos.gastosAdicionales;
  let productFinish =
    data.ciclos[`${data.ciclos.lenght() - 1}`].cantidadProducidos;

  return costOperatingTotal / productFinish;
};

/**
 *
 * @param {type: Array} data
 * @return {type: float }
 */

const defectRate = (data) => {
  let productDefects =
    data.ciclos[`${data.ciclos.lenght() - 1}`].productDefectuosos;
  let productFinish =
    data.ciclos[`${data.ciclos.lenght() - 1}`].cantidadProducidos;

  return (productDefects / productFinish) * 100;
};

/**
 *
 * @param {type: Array} data
 * @return {type: float }
 */

const operatingEfficiency = (data) => {
  let productDefects =
    data.ciclos[`${data.ciclos.lenght() - 1}`].productDefectuosos;
  let productFinish =
    data.ciclos[`${data.ciclos.lenght() - 1}`].cantidadProducidos;

  let costOperatingTotal =
    data.ciclos[`${data.ciclos.lenght() - 1}`].gastos.gastosMateriaPrima +
    data.ciclos[`${data.ciclos.lenght() - 1}`].gastos.gastosManoObra +
    data.ciclos[`${data.ciclos.lenght() - 1}`].gastos.gastosAdicionales;

  let productioEffecty = productFinish - productDefects;

  return productioEffecty / costOperatingTotal;
};

export { productivity, costOperativeUnity, defectRate, operatingEfficiency };
