import React from 'react';
import logo from './logo.svg';
import './App.css';
import Soundcloud from './Soundcloud.js';

/*
Main Hompage Component 
*/
function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Tsunagu!</h1>
       <h2>
          Tsunagu (繋ぐ) - to connect
       </h2>
        <p>
          Do you have a music library full of songs exclusive to different music platforms? Tired of not being able to have them all in one place? Tsunagu connects all music platforms
          so that you no longer have to interrupt your music listening experiene to fit the musical mood you're feeling. 
        </p>
      </header>
    </div>
  );
}

export default HomePage;
