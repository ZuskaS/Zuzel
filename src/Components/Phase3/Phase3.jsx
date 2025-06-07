import { EvaluationGrid } from '../EvaluationGrid/EvaluationGrid';
import { Button } from '../Button/Button';
import arrowRight from '../../img/arrow-right.png';
import { PageTitle } from '../PageTitle/PageTitle';
import backIcon from '../../img/back-icon.png';

export const Phase3 = ({ size, generateNumbers, userNumbers, onNewGame, onRestartGame }) => {
  return (
    <div className="container">
      <PageTitle>
        <div className="pageTitle-memory">
          <p>Správně</p>
          <p>Neoznačeno</p>
          <p>Chybně označeno</p>
        </div>
      </PageTitle>

      <EvaluationGrid
        size={size}
        generateNumbers={generateNumbers}
        userNumbers={userNumbers}
      />

      <Button onClick={onNewGame} text='Pokračovat' image={arrowRight} position='right' />
      <Button onClick={onRestartGame} text='Zopakovat cvičení' image={backIcon} position='left' />

    </div>
  );
};
