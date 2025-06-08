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
      {Array.from({ length: size * size }, (_, index) => {
        const matchUserNumbers = userNumbers.find(item => item.id === index)
        const matchGenerateNumbers = generateNumbers.find(item => item.id === index)

        const matchSuccess = matchUserNumbers && matchGenerateNumbers && matchUserNumbers.color === matchGenerateNumbers.color

        const matchErrorMissing = !matchUserNumbers && matchGenerateNumbers
        const matchError = matchUserNumbers && !matchGenerateNumbers

        return (
          <div
            className={`cell ${matchSuccess
                ? 'cell--success'
                : ''
              } ${matchErrorMissing
                ? 'cell--errorMissing'
                : ''
              }
              ${matchError
                ? 'cell--error'
                : ''
              }`}
            key={index}
          ></div>
        )
      })}
    </div>
  );
};
