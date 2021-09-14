import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from "react";

const App = () => {

  const[loading, setLoading] = useState(true);
  const[lyrics, setLyrics] = useState("");
  const[artist, setArtist] = useState("");
  const[track, setTrack] = useState("");

  var code = "";
  const urlParams = new URLSearchParams(window.location.search);
  code = urlParams.get('code');

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      code: code,
    }),
  };
  var songData = null;
  async function getSongData(){
    const response = await fetch('http://localhost:3001/lyrics?code=' + code, requestOptions);
    songData = await response.json();
    console.log(songData);
    setLoading(false);
    setLyrics(songData.lyrics);
    setTrack(songData.track);
    setArtist(songData.artist);
  }

  useEffect(() => {
    getSongData();
  });

    if (loading) {
      return (
        <div className="container">
          <div className="trackInfo">
            <div className="trackHead">
              <h2 className="title">Loading ...</h2>
            </div>
          </div>
          <Link to="/auth" className="button">
            <div className="buttonContainer refreshButton">
              <div className="buttonText">Refresh</div>
            </div>
          </Link>
        </div>
      )
    }
    else if (track.length < 2) {
      return (
        <div className="container">
          <div className="trackInfo">
            <div className="trackHead">
              <h2 className="title">Oops!</h2>
            </div>
            <div className="lyricsContainer">
              <p>
                It looks like you're not playing a song. 
              </p>
              <p></p>
              <p>
                {/* Try one of these! (recommend songs?)*/}
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
    else if (lyrics.length < 10) {
      return (
      <div className="container">
          <div className="trackInfo">
            <div className="trackHead">
              <h2 className="title">Oops!</h2>
            </div>
            <div className="lyricsContainer">
              <p>
                We couldn't find any lyrics for {track} by {artist}. 
              </p>
              <p></p>
              <p>
                This sometimes happens on less-popular songs or specific remixes. 
              </p>
              <p>
                Try another song!
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
      <div className="container">
        <div className="trackInfo">
          <div className="trackHead">
            <h2 className="title">{track}</h2>
            <h4 className="title">{artist}</h4>
          </div>
          <div className="lyricsContainer">
            {lyrics.split("\n").map((value, i) => (
              <p key={i}>{value}</p>
            ))}
          </div> 
          <Link to="/auth" className="button">
            <div className="buttonContainer refreshButton">
              <div className="buttonText">Refresh</div>
            </div>
          </Link>
        </div>
        <div className="recommendedTracks">

        </div>
      </div>
    );
  }



  export default App;