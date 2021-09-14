
const axios = require('axios');
const btoa = require('btoa');
var express = require('express'); // Express web server framework
var cors = require('cors')
const app  = express();

app.use(cors());

  //API values
  var client_id = '7cbf9eb28a4e4c10b9faedb31c1344a0'; // Your client id
  var client_secret = '0ab1f0993427424ca46c336fbf998b46'; // Your secret
  var redirect_uri = 'http://localhost:3000/lyrics'; // Where the user is redirected after authorization
  var access_token = ""; 
  var refresh_token = "";


app.post('/lyrics', async (req, res) => {
  // console.log('got here');

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
      // console.log(access_token);
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




// useEffect(() => {
  // N2NiZjllYjI4YTRlNGMxMGI5ZmFlZGIzMWMxMzQ0YTA6MGFiMWYwOTkzNDI3NDI0Y2E0NmMzMzZmYmY5OThiNDY=
  // axios('https://accounts.spotify.com/api/token', {
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
  //   },
  //   data: 'grant_type=authorization_code&code=' + req.query.code + '&redirect_uri=' + redirect_uri,
  //   method: 'POST'
  // })
  // .then(tokenResponse => {
  //   access_token = tokenResponse.data.access_token;
  //   refresh_token = tokenResponse.data.refresh_token;

  //   axios('https://api.spotify.com/v1/me/player/currently-playing', {
  //     headers: {
  //       'Authorization': 'Bearer ' + access_token
  //     },
  //     method: 'GET'
  //   }).then(songResponse => {
  //     this.track = songResponse.data.item.name;
  //     this.artist = songResponse.data.item.artists[0].name;
  //     // console.log(songResponse.data.item.name + " by " + songResponse.data.item.artists[0].name);

  //     axios('https://api.lyrics.ovh/v1/' + songResponse.data.item.artists[0].name + '/' + songResponse.data.item.name, {
  //     }).then(lyricsResponse => {
  //       console.log(lyricsResponse.data.lyrics);
  //       this.lyrics = lyricsResponse.data.lyrics;
  //       console.log(lyrics);
  //     })
  //   })
  // });
}, []);

app.listen(3001, () => {
    console.log("Server listening on port 3001");
})

// app.use(express.static(path.join(__dirname, '../../build')));
// app.use(express.static(path.join(__dirname, '../../public')));