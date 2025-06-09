import { Button } from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../Components/PageTitle/PageTitle';
import './Navigation.css';
import arrowRight from '../../img/arrow-right.png';
import arrowLeft from '../../img/arrow-left.png';

const difficulties = [
  { id: 1, name: 'Začátečník' },
  { id: 2, name: 'Mírně pokročilý' },
  { id: 3, name: 'Pokročilý' },
  { id: 4, name: 'Expert' }
]

export const Navigation = ({difficulty}) => {
  const currentDifficultyIndex = difficulties.findIndex(item => item.id === difficulty)
  const currentDifficulty = difficulties[currentDifficultyIndex]
  const nextDifficulty = difficulties[currentDifficultyIndex + 1 ]
  return (
    <>
      <PageTitle>
        <p>Gratulujeme!<br/> Dokončili jste úroveň {currentDifficulty.name}. </p>
      </PageTitle>
      <div className="navigation_container">
        <Link to={`/game/difficulty/${nextDifficulty.id}`}>
          <Button
            text={`Pokračovat na úroveň ${nextDifficulty.name}`}
            image={arrowRight}
            position="right"
          />
        </Link>

        <Link to={`/game/difficulty/${currentDifficulty.id}`}>
          <Button
            text={`Zopakovat úroveň ${currentDifficulty.name}`}
            image={arrowLeft}
            position="left"
          />
        </Link>
      </div>
    </>
  );
};
