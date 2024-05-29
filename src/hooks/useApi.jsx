const useMockApi = () => {
  const url = import.meta.env.VITE_BASE_URL;

  const postAnswers = (answers) => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(answers),
      headers: 'Content-Type: application/json',
    })
  }

  return { postAnswers };
}

export default useMockApi;const getOne = async(id) => {
    const req = await fetch(url+id)
    const res = await req.json();
    return res;
}