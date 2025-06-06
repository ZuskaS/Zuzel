import './Header.css';
import ZUZEL from '../../pages/HomePage/img/Zuzel.png';
import sound_on from './img/sound_on.png';

export const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={ZUZEL} alt="logo ZUZEL" />
            <img className="sound_on" src={sound_on} alt="zvuk zapnut" />
        </div>
    )
}
