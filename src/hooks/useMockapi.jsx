const useMockapi = (endpoint) => {
  const url = import.meta.env.MOCKAPI_URL + `/${endpoint}s`;

  const postToApi = (obj) => {
    void fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(obj),
      headers: { "content-type": "application/json" },
    });
  };

  const getAllFromApi = async () => {
    const req = await fetch(url);
    return await req.json();
  };
  return [
    postToApi,
    getAllFromApi
  ]
 
};

export default useMockapi;

