import { Link } from 'react-router-dom';
import './HomePage.css';
import ZUZEL from './img/ZUZEL.png';
import { Button } from '../../Components/Button/Button';
import arrowRight from '../../img/arrow-right.png';
import arrowLeft from '../../img/arrow-left.png';

export const HomePage = () => {
  return (
    <div className="homepage">
      <img className="img__logo-home" src={ZUZEL} alt="logo ZUZEL" />
      <h1>CVIČENÍ PAMĚTI</h1>
      <div className="logo__grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Link to="/tips">
        <Button
          text="Připravit se na trénink"
          image={arrowRight}
          position="right"
                  />
        {/*<Button text="Připravit se na trénink" />
               <Button text='Připravit se na trénink' image={arrowLeft} position='left' />*/}
      </Link>
    </div>
  );
};
