import './InstructionsPage.css';
import instructionGrid from './img/instructionGrid.png';
import lupa from '../../img/lupa.png';
import hand from './img/hand.png';
import instruction__gridEmpty from './img/instruction__gridEmpty.png';
import { PageTitle } from '../../Components/PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '../../Components/Button/Button';
import arrowRight from '../../img/arrow-right.png';
import arrowLeft from '../../img/arrow-left.png';

export const InstructionsPage = () => {
  const [page, setPage] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isDesktop ? (
        <div>
          <PageTitle>
            <p>Návod</p>
          </PageTitle>
          <div className="instructions-desktop">
            <div className="instructions_container">
              <div className="info__text">
                <p>Cílem cvičení je posílit krátkodobou paměť.</p>
              </div>
              <div className="info__text">
                <p>V prvním kroku si zapamatujete barevný vzor v mřížce.</p>
              </div>
              <div className='instuction__container'>
                <div className="instuction__visual">
                  <div className="instructionGrid">
                    <img
                      src={instructionGrid}
                      alt="obrázek mřížky se 3 vyplněnými poli"
                    />
                  </div>
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
              </div>
              <div className="info__text">
                <p>
                  Po odpočtu se zobrazí prázdná mřížka a vaším úkolem bude
                  označit správná políčka.
                </p>
              </div>



              <div className="info__text">
                <p>Barvu měníte opakovaným kliknutím.</p>
              </div>

              <Link to="/difficulty">
                <Button text="Začít trénink" image={arrowRight} position="right" />
              </Link>
            </div>
          </div>
        </div>
      ) : page ? (
        <div>
          <PageTitle>
            <p>Návod</p>
          </PageTitle>
          <div className="instructions-1">
            <div className="instructions_container">
              <div className="info__text">
                <p>Cílem cvičení je posílit krátkodobou paměť.</p>
              </div>

              <div className="instuction__visual">
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

              <Button
                onClick={() => setPage(false)}
                text="Další"
                image={arrowRight}
                position="right"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="instructions-2">
          <div className="instructions_container">
            <div className="info__text">
              <p>
                Po odpočtu se zobrazí prázdná mřížka a vaším úkolem bude
                označit správná políčka.
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
              <p>Barvu měníte opakovaným kliknutím.</p>
            </div>

            <Link to="/difficulty">
              <Button text="Začít trénink" image={arrowRight} position="right" />
            </Link>
          </div>
        </div>
      )
      }
    </div >
  );
};