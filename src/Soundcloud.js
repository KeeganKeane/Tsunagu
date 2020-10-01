import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import logo from './logo.svg';
import './App.css';


/*
Soundcloud component 
*/ 

//Add SoundCloud link to the Playlist by using React Player 
function AddToPlaylist(arrLink, SClink){
    // Push the SoundClound link in ReactPlayer to the array of SoundCloud players 
    arrLink.push(SClink)
    console.log(arrLink)
    return arrLink
}

//User input for the Soundcloud link 
function Soundcloud() {
    const [link, setLink] = useState("");
    const [arrayOfLinks, setArrayOfLinks] = useState([]);
    return (
    <div className="App">
        
        <header className="App-header">
        <h1>
            SoundCloud
        </h1>
        <h2>
            Please enter the SoundCloud link you would like to add to the playlist
        </h2>
        <p>
            <TextField id="outlined-basic" label="Enter SoundCloud Link" variant="outlined" onChange={(e) => setLink(e.target.value)}/>

            {/*On the Button Click, the link inside the textbox will be added to the array of SoundCloud Songs*/}
             <Button variant="contained" color="primary" onClick={()=> setArrayOfLinks(AddToPlaylist([...arrayOfLinks], link))}>
                Add to Playlist
            </Button>
            {console.log("test")}
            {console.log(arrayOfLinks)}
        </p>
        <p>
        {/*Working hardcoded reactplayer example*/}
        {/* <ReactPlayer playing={true} url={'https://soundcloud.com/adrianstresow/vertical'}/> */}
            {arrayOfLinks.map(item => (<ReactPlayer playing={true} url={item}/>))}
        </p>
        
        
        </header>
    </div>
    );
    }

export default Soundcloud;
