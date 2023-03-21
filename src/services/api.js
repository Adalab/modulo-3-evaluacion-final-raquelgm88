const callToApi = () => {
  
  return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export default callToApi;