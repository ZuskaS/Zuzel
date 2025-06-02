import './style.css';
import ZUZEL from './img/ZUZEL.png';

export const HomePage = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="homepage">
          <img className="img__logo" src={ZUZEL} alt="logo" />
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
          <div className="container__btn">
            {/*Tady bude asi komponenta Button*/}
            <a className="button-index" href="">
              Spustit →
            </a>
            {/*Tady bude asi komponenta Instruction*/}
            <a className="button-index" href="">
              Návod →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
