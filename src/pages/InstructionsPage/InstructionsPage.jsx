import info from './img/info.png';
import './InstructionsPage.css';
import instructionGrid from './img/instructionGrid.png';
import lupa from './img/lupa.png';
import hand from './img/hand.png';
import instruction__gridEmpty from './img/instruction__gridEmpty.png';
import { PageTitle } from '../../Components/PageTitle/PageTitle';

export const InstructionsPage = () => {
  return (
    <div>
      <div className="instructions-1">
        <PageTitle>
          <img className="icon__info" src={info} alt="ikona informací" />
          <p>Návod</p>
        </PageTitle>

        <div className="info__text">
          <p> Cílem cvičení je posílit krátkodobou pamět. </p>
        </div>

        <div className="instuction__visual">
          <img className="instruction__lupa" src={lupa} alt="lupa" />
          <img
            className="instruction__grid"
            src={instructionGrid}
            alt="obrázek mřížky se 3 vyplněnými poli"
          />
        </div>

        <div className="info__text">
          <p>V prvním kroku si zapamatujete barevný vzor v mřížce.</p>
        </div>
      </div>

      <div className="instructions-2">
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
