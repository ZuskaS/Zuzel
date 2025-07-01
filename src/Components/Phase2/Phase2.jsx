import { Grid } from '../../Components/Grid/Grid';
import { Button } from '../Button/Button';
import arrowRight from '../../img/arrow-right.png';
import arrowLeft from '../../img/arrow-left.png';
import { PageTitle } from '../PageTitle/PageTitle';
import './Phase2.css';
import { useEffect, useState } from 'react';

export const Phase2 = ({
  size,
  numbers,
  onUserClick,
  onEvaluate,
  name,
  level,
  difficulty,
  onRestartGame
}) => {

  const [countdown, setCountdown] = useState(3);
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);


  return (
    <div className="container">
      <PageTitle>
        <div className="pageTitle-memory">
          <p>{difficulty < 3 ? 'Označte políčka, která byla barevná' : 'Barvu změníte kliknutím na stejné pole'}</p>
        </div>
      </PageTitle>

      <div className="phase2_container">
        <p className='info_level'>
          {name} {level}/5{' '}
        </p>
        <Grid size={size} numbers={numbers} onUserClick={onUserClick} />
        {countdown > 0 && <div className='timer'>{countdown}</div>}

        <div className="btn">
          <Button
            onClick={onEvaluate}
            text="Zkontrolovat"
            image={arrowRight}
            position="right"
          />
          <Button
            onClick={onRestartGame}
            text="Zpět"
            image={arrowLeft}
            position="left"
          />
          </div>
        </div>
      </div>
      );
};
