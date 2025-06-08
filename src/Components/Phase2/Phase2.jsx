import { Grid } from '../../Components/Grid/Grid';
import { Button } from '../Button/Button';
import arrowRight from '../../img/arrow-right.png';
import { PageTitle } from '../PageTitle/PageTitle';
import './Phase2.css';

export const Phase2 = ({
  size,
  numbers,
  onUserClick,
  onEvaluate,
  name,
  level,
}) => {
  return (
    <>
      <PageTitle>
        <div className="pageTitle-memory">
          <p>Označte políčka, která byla barevná</p>
        </div>
      </PageTitle>

      <div className="phase2_container">
        <p>
          {name} {level}/5{' '}
        </p>

        <Grid size={size} numbers={numbers} onUserClick={onUserClick} />
        <Button
          onClick={onEvaluate}
          text="Zkontrolovat"
          image={arrowRight}
          position="right"
        />
      </div>
    </>
  );
};
