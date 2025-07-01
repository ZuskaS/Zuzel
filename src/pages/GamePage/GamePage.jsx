import { useEffect, useState } from 'react';
import { Phase1 } from '../../Components/Phase1/Phase1';
import { Phase2 } from '../../Components/Phase2/Phase2';
import { Phase3 } from '../../Components/Phase3/Phase3';
import { useNavigate, useParams } from 'react-router-dom';
import { Navigation } from '../../Components/Navigation/Navigation';
import { playClickSound } from '../../utils/playSound';

const GenerateRandomNumbers = (level, size, colors, counts) => {
  const result = [];
  const levelCounts = [...counts];

  levelCounts[levelCounts.length - 1] += (level - 1)


  levelCounts.forEach((count, index) => {
    const previousLength = result.length
    while (result.length - previousLength < count) {
      const RandomNumber = Math.floor(Math.random() * (size * size));
      if (!result.find(item => item.id === RandomNumber)) {
        result.push({ id: RandomNumber, color: colors[index] });
      }
    }
  })


  return result;
};

const currentDifficulty = (difficulty) => {
  if (difficulty === 1) {
    return {
      size: 3,
      name: 'Začátečník',
      colors: ['#1c1b1b'],
      counts: [2],
    }
  }
  if (difficulty === 2) {
    return {
      size: 4,
      name: 'Mírně pokročilý',
      colors: ['#1c1b1b'],
      counts: [6],
    }
  }
  if (difficulty === 3) {
    return {
      size: 4,
      name: 'Pokročilý',
      colors: ['#1c1b1b', '#FF9500'],
      counts: [5, 1],
    }
  }
  if (difficulty === 4) {
    return {
      size: 5,
      name: 'Expert',
      colors: ['#333333', '#FF9500', ' #009CA6'],
      counts: [5, 4, 1],
    }
  }
}

export const GamePage = () => {
  const { difficulty: stringDifficulty } = useParams();
  const difficulty = Number(stringDifficulty)
  let navigate = useNavigate();
  const { size, name, colors, counts } = currentDifficulty(difficulty);

  const [phaseGame, setPhaseGame] = useState(1);
  const [level, setLevel] = useState(1)
  const [userNumbers, setUserNumbers] = useState([]);
  const [generateNumbers, setGenerateNumbers] = useState([]);

  useEffect(() => {
    const RandomNumbers = GenerateRandomNumbers(level, size, colors, counts);
    setGenerateNumbers(RandomNumbers);
  }, []);

  const handleUserSelect = (index) => {
    let updatedNumbers;

    const selectedCell = userNumbers.find(item => item.id === index)

    if (selectedCell && selectedCell.color === colors[colors.length - 1]) {
      updatedNumbers = userNumbers.filter((item) => item.id !== index);
    } else if (selectedCell) {
      updatedNumbers = userNumbers.map((item) => {
        if (item.id === selectedCell.id) {
          const currentColorIndex = colors.findIndex(item => item === selectedCell.color)
          return { id: selectedCell.id, color: colors[currentColorIndex + 1] }
        }
        return item
      })
    }

    else {
      updatedNumbers = [...userNumbers, { id: index, color: colors[0] }];
    }
    setUserNumbers(updatedNumbers);
    playClickSound();
  };

  const handleNewGame = () => {

    if (level === 5 && difficulty === 4) {
      navigate(`/end`)
      return
    }

    if (level === 5) {
      setPhaseGame(4)
      return;
    }
    else {
      setLevel(level + 1)
      setPhaseGame(1)

    }
    const RandomNumbers = GenerateRandomNumbers((level + 1), size, colors, counts);
    setGenerateNumbers(RandomNumbers);
    setUserNumbers([])
  }

  const handleRestartGame = () => {
    const RandomNumbers = GenerateRandomNumbers(level, size, colors, counts);
    setGenerateNumbers(RandomNumbers);
    setUserNumbers([])
    setPhaseGame(1)
  }


  if (phaseGame === 1) {
    return (
      <Phase1
        name={name}
        level={level}
        size={size}
        generateNumbers={generateNumbers}
        onTest={() => setPhaseGame(2)}
      />
    );
  }
  if (phaseGame === 2) {
    return (
      <Phase2
        name={name}
        level={level}
        size={size}
        numbers={userNumbers}
        onUserClick={handleUserSelect}
        onEvaluate={() => setPhaseGame(3)}
        difficulty={difficulty}
        onRestartGame={handleRestartGame}
      />
    );
  }
  if (phaseGame === 3) {
    return (
      <Phase3
        name={name}
        level={level}
        size={size}
        generateNumbers={generateNumbers}
        userNumbers={userNumbers}
        onNewGame={handleNewGame}
        onRestartGame={handleRestartGame}
      />
    );
  }
  if (phaseGame === 4) {
    return (
      <Navigation difficulty={difficulty} />
    )
  }
};
