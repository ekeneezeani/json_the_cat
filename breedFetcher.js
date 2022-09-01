const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    
    const data = JSON.parse(body);
    const breed = data[0];
    if (!breed) {
      callback('breed not found', null);
      return;
    }

    callback(null, breed.description);
  });
};

module.exports = { fetchBreedDescription };
