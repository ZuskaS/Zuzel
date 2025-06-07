import './EvaluationGrid.css';

export const EvaluationGrid = ({ size, userNumbers, generateNumbers }) => {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`,
      }}
    >
      {Array.from({ length: size * size }, (_, index) => (
        <div
          className={`cell ${
            userNumbers.includes(index) && generateNumbers.includes(index)
              ? 'cell--success'
              : ''
          } ${
            !userNumbers.includes(index) && generateNumbers.includes(index)
              ? 'cell--error'
              : ''
          }
              ${
                userNumbers.includes(index) && !generateNumbers.includes(index)
                  ? 'cell--errorMissing'
                  : ''
              }`}
          key={index}
        ></div>
      ))}
    </div>
  );
};
