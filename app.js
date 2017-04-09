
// This will show your last 20 tweets and when they were created at in your terminal/bash window.
var myTweets = "my-tweets";

// Show artist(s), the song's name, preview link of the song from Spotify, album that the song is from. default "The Sign" by Ace of Base
var spotifyThisSong = "spotify-this-song";

// Title, Year, IMDB Rating, Country produced, Language movie, Plot movie. Actors. Rotten Tomatoes Rating. Rotten Tomatoes URL. Default Mr. Nobody
var movieThis = "movie-this";

// run spotify-this-song for "I Want it That Way," as follows the text in random.txt
var doWhatItSays = "do-what-it-says";


//require files
var request = require("request");
var twitter = require("twitter");
var spotify = require("spotify");
//capture inputs
var userCommand = process.argv[2];

//evaluate input 
//twitter command 
if (userCommand === myTweets){
	//show your last 20 tweets and when they were created at in your terminal/bash window.

} 
//spotify command 
else if(userCommand === spotifyThisSong){
	// Show artist(s), the song's name, preview link of the song from Spotify, album that the song is from. default "The Sign" by Ace of Base

} //omdb command 
else if(userCommand === movieThis){
	// ajax call to omdb
	// Title, Year, IMDB Rating, Country produced, Language movie, Plot movie. Actors. Rotten Tomatoes Rating. Rotten Tomatoes URL. Default Mr. Nobody

}