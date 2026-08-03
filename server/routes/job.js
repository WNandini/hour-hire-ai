const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
 const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search-v2',
  params: {
    query: 'developer jobs in chicago',
    num_pages: '1',
    country: 'us',
    date_posted: 'today'
  },
  headers: {
    'x-rapidapi-key': process.env.RAPID_API_KEY,,
    'x-rapidapi-host': 'jsearch.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

try {
	const response = await axios.request(options);
	res.json(response.data);
} catch (error) {
	console.error(error);
}
});

module.exports = router;