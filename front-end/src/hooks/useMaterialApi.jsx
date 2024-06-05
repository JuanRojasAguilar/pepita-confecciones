import { useEffect, useState } from "react";

const url = import.meta.env.VITE_MOCKAPI_URL + "/materials";
const postMaterial = (obj) => {
  void fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(obj),
    headers: { "content-type": "application/json" },
  });
};

const getAllMaterials = () => {
  const [loading, setLoading] = useState(true);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const laura = await fetch(url, {
          method: "GET",
          headers: { "content-type": "application/json" },
        });
        const mafe = await laura.json();
        setMaterials(mafe);
      } catch (e) {
        console.error(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, materials };
};

export { postMaterial, getAllMaterials };
