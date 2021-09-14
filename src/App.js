import './App.css';
import React from 'react';
import Auth from './components/auth';
import Home from './components/home';
import Lyrics from './components/lyrics';
import { Link } from 'react-router-dom';
import logo from './img/ColorFull.png';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <div className="content">
          <div className="header">
            <div className="logoContainer">
              <Link to="/">
                <img src={logo} className="logo"></img>
              </Link> 
            </div>
          </div>
        </div>
      <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/auth" component={Auth}></Route>
          <Route path="/lyrics" component={Lyrics}></Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
