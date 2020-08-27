const request = require("request");

const userInput = process.argv.slice(2);
const url = (`https://api.thecatapi.com/v1/breeds/search?q=${userInput[0]}`);

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Requested breed not found");
    } else {
      console.log(data[0].description);
    }
  }
});