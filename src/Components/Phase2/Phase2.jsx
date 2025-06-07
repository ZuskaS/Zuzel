import { Grid } from '../../Components/Grid/Grid';
import { Button } from '../Button/Button';
import arrowRight from '../../img/arrow-right.png'
import { PageTitle } from '../PageTitle/PageTitle';


export const Phase2 = ({ size, numbers, onUserClick, onEvaluate }) => {
  return (
    <div className="container">
   
    <PageTitle>
      <div className="pageTitle-memory">
        <p>Označte políčka, která byla barevná</p>
      </div>
    </PageTitle>

      <Grid size={size} numbers={numbers} onUserClick={onUserClick} />
      <Button onClick={onEvaluate} text='Zkontrolovat' image={arrowRight} position='right'/>
    </div>
  );
};
