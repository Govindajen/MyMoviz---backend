var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`, /* {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer //'
      }} */
    )				
    .then(response => response.json())
    .then(apiData => 
        res.json({movies: apiData.results}))
})


module.exports = router;
