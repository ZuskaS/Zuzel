import './Header.css';
import ZUZEL from '../../pages/HomePage/img/ZUZEL.png';
import sound_on from './img/sound_on.png';
import mute from './img/mute.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [sound, setSound] = useState(localStorage.getItem('sound') === 'on');

  const toggleSound = () => {
    const newValue = !sound;
    setSound(newValue)
    localStorage.setItem("sound", newValue ? 'on' : 'off');
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={ZUZEL} alt="logo ZUZEL" />
      </Link>
      <div
        className="sound"
        onClick={toggleSound}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleSound();
          }
        }}
        tabIndex="0"
        role="button"
        aria-label={sound ? 'vypnout zvuk' : 'zapnout zvuk'}
      >
        <img src={sound ? sound_on : mute} alt={sound ? 'zvuk zapnuto' : 'zvuk vypnuto'} />
      </div>
    </div>
  );
};
