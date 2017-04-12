
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
var Twitter = require("twitter");
var spotify = require("spotify");
var keysJS = require("./keys.js"); //gets the keys document that is holding the twitter info
var fs = require("fs");


//capture inputs
var userCommand = process.argv[2];
var keys = keysJS.twitterKeys; //saved key object in var

//evaluate input 
//twitter command 
if (userCommand === myTweets){
	//show your last 20 tweets and when they were created at in your terminal/bash window.
	var params = {screen_name: 'austin360'};
	keys.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	i = 0;
	  	while (i < 10){
	      console.log(tweets[i].text + "--------------------------------------------"); //logging last 20 tweets
	      i++;
	    }
	  } else {
	      throw error
	  }
	});
}//end of twitter 

//spotify command 
else if(userCommand === spotifyThisSong){
	if (process.argv[3] !== ""){
		var userSong = process.argv[3]; 
		for(var i = 3; i < (process.argv.length-1); i++){
			userSong = process.argv[i]+ " " + process.argv[i+1]; //building query string
			console.log(userSong);
		};
	};
	// Show artist(s), the song's name, preview link of the song from Spotify, album that the song is from. default "The Sign" by Ace of Base
	spotify.search({ type: 'track', query: userSong }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    };
	 
	    console.log("Artist/s:" + data.tracks.items[0].album.artists[0].name);
	    console.log("Spotify URL:" + data.tracks.items[0].album.artists[0].external_urls.spotify);
	    console.log("Album:" + data.tracks.items[0].album.name);

	});

} //omdb command 
else if(userCommand === movieThis){
	var movieName = "Mr.+Nobody"; //default movie name
	
	// !! Later make sure the user can input titles with spaces
	if (process.argv[3] !== ""){
		movieName = process.argv[3]; 
		for(var i = 3; i < (process.argv.length-1); i++){
		movieName = process.argv[i]+ "+" + process.argv[i+1]; //reset default value of movieName to user request. 
		};
	};
	// Title, Year, IMDB Rating, Country produced, Language movie, Plot movie. Actors. Rotten Tomatoes Rating. Rotten Tomatoes URL.
	console.log("Movie name entered " + movieName);

	// Then run a request to the OMDB API with the movie specified
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

	request(queryUrl, function(error, response, body) {

	   // If the request is successful
	   if (!error && response.statusCode === 200) {
			console.log( "Title: " + JSON.parse(body).Title); //Title
			console.log( "Release year: " + JSON.parse(body).Year); //Year
			console.log( "IMDB rating: " + JSON.parse(body).imdbRating); //Rating
			console.log( "Release year: " + JSON.parse(body).Country); //Country Produced
			console.log( "Language: " + JSON.parse(body).Language); //Language
			console.log( "Plot: " + JSON.parse(body).Plot); //Plot
			console.log( "Actors: " + JSON.parse(body).Actors); //Actors
			if(JSON.parse(body).Ratings !== undefined && JSON.parse(body).Ratings[1] !== undefined){
				console.log( "Rotten Tomatoes: " + JSON.parse(body).Ratings[1].Value); //Rotten Tomatoes only when available
	   		}
	   		console.log( "Website: " + JSON.parse(body).Website); //Website

   		}
	}); //end of request

} //end of movieThis
else {
	console.log("Please select a command of 'movie-this', 'spotify-this-song', or 'my-tweets' plus an agrument to continue");
}


