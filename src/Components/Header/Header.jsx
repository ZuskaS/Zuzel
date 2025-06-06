import './Header.css';
import ZUZEL from '../../pages/HomePage/img/Zuzel.png';
import sound_on from './img/sound_on.png';
import mute from './img/mute.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [sound, setSound] = useState(true)

    const toggleSound = () => {
        setSound(!sound)
    }

    return (
        <div className="header">
            <Link to='/'>
                <img
                    className="logo"
                    src={ZUZEL}
                    alt="logo ZUZEL" />
            </Link>
            <img
                onClick={toggleSound}
                className="sound"
                src={sound ? sound_on : mute}
                alt={sound ? "zvuk zapnuto" : "zvuk vypnuto"}
            />
        </div>
    )
}
