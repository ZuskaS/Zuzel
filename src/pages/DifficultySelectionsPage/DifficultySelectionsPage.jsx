import { Button } from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../Components/PageTitle/PageTitle';
import star1 from './img/star_1.png'
import star2 from './img/star_2.png'
import star3 from './img/star_3.png'
import star4 from './img/star_4.png'
import './DifficultySelectionsPage.css';


export const DifficultySelectionsPage = () => {
  return (
    <>
      <PageTitle>
        <p>Vyberte svoji úroveň</p>
      </PageTitle>
      <div className="dificulty_container">
        <Link to="/game/difficulty/1">
          <Button text="Začátečník" position="center" image={star1} />
        </Link>

        <Link to="/game/difficulty/2">
          <Button text="Mírně pokročilý" position="center"image={star2} />
        </Link>

        <Link to="/game/difficulty/3">
          <Button text="Pokročilý" position="center" image={star3}/>
        </Link>

        <Link to="/game/difficulty/4">
          <Button text="Expert" position="center" image={star4} />
        </Link>
      </div>
    </>
  );
};
