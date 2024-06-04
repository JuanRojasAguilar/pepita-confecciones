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
  const req = await fetch(url, {
    method: "GET",
    headers: { 'content-type': 'application/json' }
  })
  const res = await req.json()

  return res;
};

export { postMaterial, getAllMaterials };

