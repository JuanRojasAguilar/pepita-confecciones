const useMockapi = () => {
  const url = import.meta.env.MOCKAPI_URL;

  const postToApi = (endpoint, obj) => {
    void fetch(url + endpoint, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(obj),
      headers: { "content-type": "application/json" },
    });
  };

  const getAllFromApi = async (endpoint) => {
    const req = await fetch(url + endpoint);
    return await req.json();
  };
  return [
    postToApi,
    getAllFromApi
  ]
 
};

export default useMockapi;

