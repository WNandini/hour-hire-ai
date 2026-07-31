// const express = require("express");
// const axios = require("axios");

// const router = express.Router();

// router.get("/", async (req, res) => {
//  try {
//     // const { where, page = 1 } = req.query;
//     const { ADZUNA_APP_ID, ADZUNA_APP_KEY, ADZUNA_COUNTRY } = process.env;
//     const { what = 'Full Stack Developer', where, page = 1 } = req.query;
//     const adzunaUrl = `https://api.adzuna.com/v1/api/jobs/${ADZUNA_COUNTRY}/search/${page}`;

//     const response = await axios.get(adzunaUrl, {
//       params: {
//         app_id: ADZUNA_APP_ID,
//         app_key: ADZUNA_APP_KEY,
//         results_per_page: 10,
//         what: what || undefined,
//         where: where || undefined,
//       },
//       headers: {
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
//     'Accept': 'application/json'
//   }
//     });

//     res.json(response.data);
//     console.log("adzuna",response.data)
//   } catch (error) {
//     console.error('Adzuna API Error:', error.response?.data || error.message);
//     res.status(error.response?.status || 500).json({
//       message: 'Failed to fetch job listings from Adzuna.',
//     });
//   }
// })

// module.exports = router;