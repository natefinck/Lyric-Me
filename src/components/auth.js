import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {

  const[online, setOnline] = useState(navigator.onLine);

  if (!online) {
    return (
      <div className="container">
        <div className="trackInfo">
          <div className="trackHead">
            <h2 className="title">Oops!</h2>
          </div>
          <div className="lyricsContainer">
            <p>
              It looks like you're not not online. 
            </p>
          </div>
          <Link to="/auth" className="button">
            <div className="buttonContainer refreshButton">
              <div className="buttonText">Refresh</div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
    return (
        window.location.href = 'https://accounts.spotify.com/authorize?' +
        querystring.stringify({
          response_type: 'code',
          client_id: client_id,
          scope: scope,
          redirect_uri: redirect_uri
        }),
      <div className="container">
        <div className="trackInfo">
          <div className="trackHead">
            <h2 className="title">Authorizing ...</h2>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;


  var client_id = '7cbf9eb28a4e4c10b9faedb31c1344a0'; // Your client id
  var client_secret = '0ab1f0993427424ca46c336fbf998b46'; // Your secret
  var redirect_uri = 'http://localhost:3000/lyrics'; // Your redirect uri

  var stateKey = 'spotify_auth_state';
  var scope = 'user-read-private user-read-email user-read-currently-playing';

  var querystring = require('querystring');

