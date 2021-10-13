
const path = require('path');
const axios = require('axios');
const btoa = require('btoa');
var express = require('express'); // Express web server framework
var cors = require('cors')
const app  = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

  //API values
  var client_id = '7cbf9eb28a4e4c10b9faedb31c1344a0'; // Your client id
  var client_secret = '0ab1f0993427424ca46c336fbf998b46'; // Your secret
  var redirect_uri = 'https://lyricme.herokuapp.com/lyrics'; // Where the user is redirected after authorization
  var access_token = ""; 
  var refresh_token = "";


app.post('/lyrics', async (req, res) => {

  var track = "";
  var artist = "";
  var lyrics = "";

  try {
    const accessTokenRequest = await axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
      },
      data: 'grant_type=authorization_code&code=' + req.query.code + '&redirect_uri=' + redirect_uri,
      method: 'POST'
    })
      access_token = accessTokenRequest.data.access_token;
      refresh_token = accessTokenRequest.data.refresh_token;
  } catch(err) {
    console.log("error on token request");
  }

  try {
    const currentSongRequest = await axios('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': 'Bearer ' + access_token
      },
      method: 'GET'
    });
    track = currentSongRequest.data.item.name;
    artist = currentSongRequest.data.item.artists[0].name;
    // console.log(track + " by " + artist);
  } catch(err) {
    console.log("error on song request");
    console.log(err);
  }
  
  try {
    const lyricsRequest = await axios('https://api.lyrics.ovh/v1/' + artist + '/' + track, {
    })
    lyrics = lyricsRequest.data.lyrics;
    // console.log(lyrics);
  } catch {
    console.log("error on lyrics request");
  }

  res.send({success: true, nate: true, track: track, artist: artist, lyrics: lyrics});
}, []);

//serving react and my server on the same port
app.use('/static', express.static(path.join(__dirname, '..', 'build', 'static')));
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('*', (req, res) => res.sendFile('index.html', { root: path.join(__dirname, '..', 'build') }));

app.listen(port, () => {
  console.log('Server listening on port ' + port);
});