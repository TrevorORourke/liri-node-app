var axios = require("axios");

if (process.argv[2] === 'concert-this') {

    var artistname = process.argv[3];
}

function getConcertInfo(artistname) {

  
    var queryUrl = "https://rest.bandsintown.com/artists/" + artistname + "/events?app_id=codingbootcamp";

   
    // console.log(queryUrl);

    axios.get(queryUrl)
        .then(
            function (response) {
                console.log("Venue: " + response.data[0].venue.name);
                console.log("location: " + response.data[0].venue.city);
                console.log("Date and Time: " + response.data[0].datetime);

            })

}

getConcertInfo(artistname)