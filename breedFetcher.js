const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = (`https://api.thecatapi.com/v1/breeds/search?q=${breedName[0]}`);

  request(url, (error, response, body) => {
    if (error) {
      callback(`Request failed: ${error}`, null);
    }

    const data = JSON.parse(body);

    if (breedName) {
      callback(null, data[0].description);
    } else {
      callback(`Requested information not found: ${breedName}`, null);
    }
  });
};

module.exports = {fetchBreedDescription};