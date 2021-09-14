import { Link } from 'react-router-dom';
import './style/style.css';
import playCard from '../img/playCard.png';
import spotify from '../img/Spotify-logo.png';

var peachesLyrics = "I get my peaches out in Georgia\r\nI get my weed from California\r\nI took my chick up to the North\r\nI get my light right from the source\r\nAnd I see you (Oh), the way I breathe you in\n\nIt's the texture of your skin\n\nI wanna wrap my arms around you, baby\n\nNever let you go, oh\n\nAnd I see you\n\nThere's nothing like your touch\n\nIt’s the way you lift me up, yeah\n\nAnd I'll be right here with you 'til the end\n\n\n\nI get my peaches out in Georgia\n\nI get my weed from California\n\nI took my chick up to the North, yeah\n\nI get my light right from the source, yeah, yeah, that's it\n\n\n\nYou enjoy it, but I'm for your\n\nAll I can want, all I can wish for\n\nNights alone that we wished for\n\nAnd days we savin' souvenirs\n\nThere's no time, I wanna make more time\n\nAnd give you my whole life\n\nI left my girl, I’m in my Yorker\n\nHate to leave, call it torture\n\nRemember when I couldn’t hold her\n\nLeft the baggage from her over\n\n\n\nI get my peaches out in Georgia\n\nI get my weed from California\n\nI took my chick up to the North, yeah\n\nI get my light right from the source, yeah, yeah, that’s it\n\n\n\nI get the feeling, so I'm sure\n\nHand in my hand because I'm yours\n\nI can't, I can’t pretend, I can't ignore you're right for me\n\nDon't think you wanna know just where I stand, oh\n\nGirl, you got me distracted\n\nThe one I need is right in my arms\n\nIf this is the sweetest of mind\n\nAnd I'll be right here with you 'til end of time\n\n\n\nI get my peaches out in Georgia\n\nI get my weed from California\n\nI took my chick up to the North, yeah\n\nI get my light right from the source, yeah, yeah, that's it\n\nI get my peaches out in Georgia\n\nI get my weed from California\n\nI took my chick up to the North, yeah\n\nI get my light right from the source, yeah, yeah, that's it\n\nI get my peaches out in Georgia\n\nI get my weed from California\n\nI took my chick up to the North, yeah\n\nI get my light right from the source, yeah, yeah, that's it\n\nI get my peaches out in Georgia, ooh, yeah\n\nI get my weed from California\n\nI took my chick up to the North, yeah\n\nI get my light right from the source, yeah, yeah, that's it";


function App() {
    return (
      <div className="">
        <div className="main">
          <div className="cardContainer">
            <div className="lyricsWrapper">
              <div className="homeLyrics">
                {peachesLyrics.split("\n").map((value, i) => (
                  <p key={i}>{value}</p>
                ))}
              </div>
            </div>
            <img src={playCard} className="playCard"></img>
          </div>
          <div className="rerouteContainer">
            <p className="contentText">
              LyricMe is the easiest way to display the lyrics to all your favorite songs. 
            </p>
            <Link to="/auth" className="button">
              <div className="buttonContainer">
                <div className="buttonText">Log in with Spotify</div>
                <div>
                  <img className="spotify" src={spotify}></img>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </div>
    );
  }
  
  export default App;