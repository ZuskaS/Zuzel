import { Grid } from '../../Components/Grid/Grid';

export const Phase1 = ({ size, generateNumbers }) => {
  return (
    <div className="container">
      <Grid size={size} numbers={generateNumbers} />
    </div>
  );
};
