import { useEffect, useState } from "react";

const url = import.meta.env.VITE_MOCKAPI_URL + "/orders";
const postOrder = (arr) => {
  void fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(arr),
    headers: { "content-type": "application/json" },
  });
};

const getAllOrders = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const laura = await fetch(url, {
          method: "GET",
          headers: { "content-type": "application/json" },
        });
        const mafe = await laura.json();
        setOrders(mafe);
      } catch (e) {
        console.error(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, orders };
};

export { postOrder, getAllOrders };
