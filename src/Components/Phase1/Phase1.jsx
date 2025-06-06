import { Grid } from '../../Components/Grid/Grid';
import { PageTitle } from '../PageTitle/PageTitle';
import { Button } from '../Button/Button';
import arrowRight from '../../img/arrow-right.png';
import arrowLeft from '../../img/arrow-left.png';
import lupa from '../../img/lupa.png';

export const Phase1 = ({ size, generateNumbers, onTest, name, level }) => {
  return (
    <div className="container">
      <PageTitle>
        <div className="pageTitle-memory">
          <img className="instruction__lupa memory" src={lupa} alt="lupa" />
          <p>Zapamatujte si rozložení mřížky.</p>
        </div>
      </PageTitle>
      <p>{name} {level}/5 </p>
      <Grid size={size} numbers={generateNumbers} />
      <Button
        text="Jdu na to!"
        image={arrowRight}
        position={'right'}
        onClick={onTest}
      />
      <Button text="Zpět" image={arrowLeft} position={'left'} />
    </div>
  );
};
