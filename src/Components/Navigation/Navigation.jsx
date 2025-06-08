import { Button } from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../Components/PageTitle/PageTitle';
import './DifficultySelectionsPage.css';
import arrowRight from '../../img/arrow-right.png';
import arrowLeft from '../../img/arrow-left.png';

export const Navigation = (name) => {
  return (
    <>
      <PageTitle>
        <p>Gratulujeme! Dokončili jste úroveň {name}. </p>
      </PageTitle>
      <div className="dificulty_container">
        <Link to="/game/difficulty/1">
          <Button
            text="`Pokračovat na úroveň ${difficulty}` "
            image={arrowRight}
            position="right"
          />
        </Link>

        <Link to="/game/difficulty/2">
          <Button
            text="`Zopakovat úroveň ${level}` "
            image={arrowLeft}
            position="left"
          />
        </Link>
      </div>
    </>
  );
};
