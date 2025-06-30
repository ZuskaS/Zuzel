import { EvaluationGrid } from '../EvaluationGrid/EvaluationGrid';
import { Button } from '../Button/Button';
import arrowRight from '../../img/arrow-right.png';
import { PageTitle } from '../PageTitle/PageTitle';
import backIcon from '../../img/back-icon.png';
import './Phase3.css';
import ok from '../../img/ok.png';
import square from '../../img/square.png';
import squareCross from '../../img/squareCross.png';

export const Phase3 = ({
  size,
  generateNumbers,
  userNumbers,
  onNewGame,
  onRestartGame,
  name,
  level,
}) => {
  return (
      <div className="container">
      <PageTitle>
        <div className="pageTitle-memory">
          <div className="right">
            <img className="ok" src={ok} alt="správně označeno" />
            <p>Správně</p>
          </div>
          <div className="missing">
            <img className="none" src={square} alt="neoznačené pole" />
            <p>Neoznačeno</p>
          </div>
          <div className="bug">
            <img className="mistake" src={squareCross} alt="křížek chyba" />
            <p className="text-left">Chybně označeno</p>
          </div>
        </div>
      </PageTitle>
      <div className="phase3_container">
        <p className='info_level'>
          {name} {level}/5{' '}
        </p>

        <EvaluationGrid
          size={size}
          generateNumbers={generateNumbers}
          userNumbers={userNumbers}
        />

        <Button
          onClick={onNewGame}
          text="Pokračovat"
          image={arrowRight}
          position="right"
        />
        <Button
          onClick={onRestartGame}
          text="Zopakovat cvičení"
          image={backIcon}
          position="left"
        />
      </div>
    </div>
  );
};
