import { Grid } from '../../Components/Grid/Grid';

export const Phase2 = ({ size, numbers, onUserClick }) => {
  return (
    <div className="container">
      <Grid size={size} numbers={numbers} onUserClick={onUserClick} />
    </div>
  );
};
