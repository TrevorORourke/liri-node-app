var axios = require("axios");

if (process.argv[2] === 'movie-this') {

  var movieName = process.argv[3];
}

function getMovieInfo(moviename) {


  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


  // console.log(queryUrl);

  axios.get(queryUrl)
    .then(
      function (response) {
        console.log(response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("imdb Rating: " + response.data.imdbRating);
        console.log("Country produced: "+ response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: "+ response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        
      })

    }


getMovieInfo(movieName)
