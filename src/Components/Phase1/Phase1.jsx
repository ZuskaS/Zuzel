import { Grid } from '../../Components/Grid/Grid';
import { PageTitle } from '../PageTitle/PageTitle';
import { Button } from '../Button/Button';
import arrowRight from '../../img/arrow-right.png';
import arrowLeft from '../../img/arrow-left.png';
import lupa from '../../img/lupa.png';
import './Phase1.css';
import { Link } from 'react-router-dom';

export const Phase1 = ({ size, generateNumbers, onTest, name, level }) => {
  return (
    <>
      <div className="container">
        <PageTitle>
          <img className="instruction__lupa difficulty" src={lupa} alt="lupa" />
          <p>Zapamatujte si rozložení mřížky.</p>
        </PageTitle>
        <div className="phase1_container">
          <p>
            {name} {level}/5{' '}
          </p>
          <Grid size={size} numbers={generateNumbers} />
          <div className="btn">
            <Button
              text="Jdu na to!"
              image={arrowRight}
              position={'right'}
              onClick={onTest}
            />
            <Link to='/difficulty'>
            <Button text="Zpět" image={arrowLeft} position={'left'} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
