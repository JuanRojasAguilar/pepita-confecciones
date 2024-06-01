const useMaterial = (data) => {
  const srcData = data;
  const takeInformation = (dataMaterial) => {
    id = srcData.materiaPrima.find((material) => {
      const keys = Object.keys(material);
      return keys.includes(dataMaterial.id);
    });

    if (id) {
      return;
    } else {
      srcData.materiaPrima[`${dataMaterial.id}`] = dataMaterial;
    }
  };

  return { takeInformation };
};
