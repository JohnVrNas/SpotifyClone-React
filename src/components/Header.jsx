import React from 'react';
import spotifyIcon from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className='header'>
      
        <img src={spotifyIcon} alt="icone do spotify" />

        <a href="" className='spotify__link'>
          <h1>Spotify</h1>
        </a>
        
    </div>
  )
}

export default Header