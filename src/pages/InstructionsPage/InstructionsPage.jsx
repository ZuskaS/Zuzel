import info from './img/info.png';
import './InstructionsPage.css';
import instructionGrid from './img/instructionGrid.png';
import lupa from '../../img/lupa.png';
import hand from './img/hand.png';
import instruction__gridEmpty from './img/instruction__gridEmpty.png';
import { PageTitle } from '../../Components/PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../../Components/Button/Button';
import arrowRight from '../../img/arrow-right.png';
import arrowLeft from '../../img/arrow-left.png';

export const InstructionsPage = () => {
  const [page, setPage] = useState(true);

  return (
    <div>
      {page ? (
        <div className="instructions-1">
          <PageTitle>
            <img className="icon__info" src={info} alt="ikona informací" />
            <p>Návod</p>
          </PageTitle>
          <div className="instructions_container">
            <div className="info__text">
              <p> Cílem cvičení je posílit krátkodobou pamět. </p>
            </div>

            <div className="instuction__visual">
              <img className="instruction__lupa" src={lupa} alt="lupa" />
              <div className="instructionGrid">
                <img
                  src={instructionGrid}
                  alt="obrázek mřížky se 3 vyplněnými poli"
                />
              </div>
            </div>

            <div className="info__text">
              <p>V prvním kroku si zapamatujete barevný vzor v mřížce.</p>
            </div>
            <Link to="/difficulty">
              <Button text="Přeskočit návod"/>
            </Link>
            <Button
              onClick={() => setPage(false)}
              text="další"
              image={arrowRight}
              position="right"
            />
          </div>
        </div>
      ) : (
        <div className="instructions_container">
          <div className="instructions-2">
            <div className="info__text">
              <p>
                {' '}
                Po odpočtu se zobrazí prázdná mřížka a vaším úkolem je označit
                správná políčka.
              </p>
            </div>
            <div className="instuction__visual--empty">
              <img
                className="instruction__grid--empty"
                src={instruction__gridEmpty}
                alt="obrázek mřížky se prázdnými poli"
              />
              <img
                className="hand"
                src={hand}
                alt="ruka ukazující ukazovákem"
              />
            </div>

            <div className="info__text">
              <p> Barvu měníte opakovaným kliknutím na čtverec. </p>
            </div>

            <Button
              onClick={() => setPage(true)}
              text="zpět"
              image={arrowLeft}
              position="left"
            />

            <Link to="/difficulty">
              <Button text="Začít trénink" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
