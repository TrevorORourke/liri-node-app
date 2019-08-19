var axios = require("axios");

var Spotify = require('node-spotify-api');


var spotifySecert = '5fc28578165b4d6bbe05acfeb6bcd880'
var spotifyId = 'f7deeb86784c4bf5a284346a7455f5e7'

var spotify = new Spotify({
    id: spotifyId,
    secret: spotifySecert,
});

if (process.argv[2] === 'spotify-this-song') {

    var songname = process.argv[3];
}

function getSpotifyData(songname) {


    spotify.search({ type: 'track', query: songname },

        function (err, data) {

            if (err) {
                return console.log('Error occurred: ' + err);
            }

         
            console.log("Song: " + data.tracks.items[0].name);
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Album: " + data.tracks.items[0].album.name);
            console.log("Link: " + data.tracks.items[0].href);

        });

}

getSpotifyData(songname)

