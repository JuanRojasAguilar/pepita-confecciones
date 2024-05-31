const useMaterialApi = () => {
  const url = import.meta.env.VITE_MOCKAPI_URL+"/materials";

  const postToApi = (obj) => {
    void fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(obj),
      headers: { "content-type": "application/json" },
    });
  };

  const getAllFromApi = () => {
    const req = fetch(url, {
      method: "GET",
      headers: { 'content-type': 'application/json' }
    }).then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(materials => {
      return materials
    }).catch(error => {
      console.log(error.message)
    })
  };

  return {
    postToApi,
    getAllFromApi
  }
 
};

export default useMaterialApi;

