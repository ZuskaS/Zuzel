import { EvaluationGrid } from '../EvaluationGrid/EvaluationGrid';

export const Phase3 = ({ size, generateNumbers, userNumbers }) => {
  return (
    <div className="container">
      <EvaluationGrid
        size={size}
        generateNumbers={generateNumbers}
        userNumbers={userNumbers}
      />
    </div>
  );
};
