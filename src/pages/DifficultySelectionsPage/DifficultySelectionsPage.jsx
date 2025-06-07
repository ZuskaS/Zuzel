import { Button } from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../Components/PageTitle/PageTitle';

export const DifficultySelectionsPage = () => {
  return (
    <>
      <PageTitle>
        <p>Vyberte svoji úroveň</p>
      </PageTitle>

      <Link to='/game/difficulty1'>
        <Button text="Začátečník" position="center" />
      </Link>

      <Link to='/game/difficulty2'>
        <Button text="Mírně pokročilý" position="center" />
      </Link>

      <Link to='/game/difficulty3'>
        <Button text="Pokročilý" position="center" />
      </Link>

      <Link to='/game/difficulty4'>
        <Button text="Expert" position="center" />
      </Link>
    </>
  );
};
