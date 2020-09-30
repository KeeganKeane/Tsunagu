import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';


/*
Soundcloud component 
*/ 
function Soundcloud() {
    const [link, setLink] = useState("");
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
            <Button variant="contained" color="primary">
                Add to Playlist
            </Button>
        </p>
        </header>
    </div>
    );
    }

export default Soundcloud;
