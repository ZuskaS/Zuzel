import { Button } from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../Components/PageTitle/PageTitle';
import './DifficultySelectionsPage.css';

export const DifficultySelectionsPage = () => {
  return (
    <>
      <PageTitle>
        <p>Vyberte svoji úroveň</p>
      </PageTitle>
      <div className="dificulty_container">
        <Link to="/game/difficulty/1">
          <Button text="Začátečník" position="center" />
        </Link>

        <Link to="/game/difficulty/2">
          <Button text="Mírně pokročilý" position="center" />
        </Link>

        <Link to="/game/difficulty/3">
          <Button text="Pokročilý" position="center" />
        </Link>

        <Link to="/game/difficulty/4">
          <Button text="Expert" position="center" />
        </Link>
      </div>
    </>
  );
};
