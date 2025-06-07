import './img/info.png';
import './InstructionsPage.css';
import './img/instructionGrid.png';
import './img/lupa.png';
import './img/hand.png';
import './img/instruction__gridEmpty.png';

export const InstructionsPage = () => {
  return (
    <div>
      <div className="first__page">
        <div className="page-title">
          <p>Návod</p>
          <img className="icon__info" src={info} alt="ikona informací" />
        </div>

        <div className="info__text">
          <p> Cílem cvičení je posílit krátkodobou pamět. </p>
        </div>

        <div className="instuction__visual">
          <img className="instruction__lupa" src={lupa} alt="lupa" />
          <img
            className="instruction__grid"
            src={instruction__grid}
            alt="obrázek mřížky se 3 vyplněnými poli"
          />
        </div>

        <div className="info__text">
          <p>V prvním kroku si zapamatujete barevný vzor v mřížce.</p>
        </div>
      </div>

      <div className="second__page">
        <div>
          <img
            className="second__page--infoImg"
            src={info}
            alt="ikona informací"
          />
        </div>

        <div className="instuction__visual--empty">
          <img className="hand" src={hand} alt="ruka ukazující ukazovákem" />
          <img
            className="instruction__grid--empty"
            src={instruction__gridEmpty}
            alt="obrázek mřížky se prázdnými poli"
          />
        </div>

        <div className="info__text">
          <p> Barvu měníte opakovaným kliknutím na čtverec. </p>
        </div>
      </div>
    </div>
  );
};
