import { Button } from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../Components/PageTitle/PageTitle';

export const DifficultySelectionsPage = () => {
  return (
    <>
      <PageTitle>
        <p>Vyberte svoji úroveň</p>
      </PageTitle>

      <Link to="/memory">
        <Button text="Začátečník" position="center" />
      </Link>

      <Link to="/memory">
        <Button text="Mírně pokročilý" position="center" />
      </Link>

      <Link to="/memory">
        <Button text="Pokročilý" position="center" />
      </Link>

      <Link to="/memory">
        <Button text="Expert" position="center" />
      </Link>
    </>
  );
};
