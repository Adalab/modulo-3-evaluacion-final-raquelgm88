const callToApi = (house) => {
  
  return fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export default callToApi;