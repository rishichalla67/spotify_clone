import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login'
import Player from "./Player";
import {getTokenFromResponseUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateProviderValue } from "./StateProvider";

const spotify = new SpotifyWebApi();


function App() {
    // const [token, setToken] = useState(null);
    const [{ user, token }, dispatch] = useStateProviderValue();

   // Run
   useEffect(() => {
       const hash = getTokenFromResponseUrl();

       //Clear access token from URL
       window.location.hash = "";

       let _token = hash.access_token;

       if(_token) {
           dispatch({
               type: "SET_TOKEN",
               token: _token,
           });

           //Give access token to Spotify API
           spotify.setAccessToken(_token);

           spotify.getMe().then((user) => {
               dispatch({
                   type: "SET_USER",
                   user: user,
               });
           });
       }

       //console.log('TOKEN>>>> ', token);
   }, []);

    //console.log('person: ', user);

  return (
    <div className="App">
        {
            token?(<Player/>):(<Login/>)
        }
    </div>
  );
}

export default App;
