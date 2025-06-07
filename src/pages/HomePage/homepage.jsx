import { Link } from 'react-router-dom';
import './HomePage.css';
import ZUZEL from './img/ZUZEL.png';

export const HomePage = () => {
  return (
    <div className="container">
      <div className="homepage">
        <img className="img__logo" src={ZUZEL} alt="logo ZUZEL" />
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
        <Link to='/tips'>
        <div className="container__btn">
          {/*Tady bude asi komponenta Button*/}
            <p className="button-index" >
            Připravit se na trénink →
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
};
