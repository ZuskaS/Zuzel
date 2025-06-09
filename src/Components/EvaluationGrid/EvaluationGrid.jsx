import { useEffect } from 'react';
import './EvaluationGrid.css';
import { playFailSound, playSuccesSound } from '../../utils/playSound';

export const EvaluationGrid = ({ size, userNumbers, generateNumbers }) => {

  useEffect(() => {
    if (userNumbers.length !== generateNumbers.length) {
      playFailSound()
      return
    }
    let isWin = true
    userNumbers.forEach(userGuess => {
      const match = generateNumbers.find(item => item.id === userGuess.id && item.color === userGuess.color)
      if (!match) {
        isWin = false
      }
    })
    if (isWin) {
      playSuccesSound()
    }
    else {
      playFailSound()
    }
  }, [])



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
        const matchError = (matchUserNumbers && !matchGenerateNumbers) || (matchUserNumbers?.color !== matchGenerateNumbers?.color);


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
