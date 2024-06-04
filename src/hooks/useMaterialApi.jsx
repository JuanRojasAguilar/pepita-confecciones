const url = import.meta.env.VITE_MOCKAPI_URL + "/materials";
const postMaterial = (obj) => {
  void fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(obj),
    headers: { "content-type": "application/json" },
  });
};

const getAllMaterials = async () => {
  const response = await fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("The API response wasn't ok");
  }

  const data = await response.json();
  return data;
};

export { postMaterial, getAllMaterials };
