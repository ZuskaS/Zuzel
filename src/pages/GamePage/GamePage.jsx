import { useEffect, useState } from 'react';
import { Phase1 } from '../../Components/Phase1/Phase1';
import { Phase2 } from '../../Components/Phase2/Phase2';
import { Phase3 } from '../../Components/Phase3/Phase3';
import { useNavigate, useParams } from 'react-router-dom';

const GenerateRandomNumbers = (level, size) => {
  const result = [];
  const count = level + 1;

  while (result.length < count) {
    const RandomNumber = Math.floor(Math.random() * (size * size));
    if (!result.includes(RandomNumber)) {
      result.push(RandomNumber);
    }
  }
  return result;
};

const currentDifficulty = (difficulty) => {
  if (difficulty === 1) {
    return {
      size: 3,
      name: 'Začátečník',
    }
  }
  if (difficulty === 2) {
    return {
      size: 4,
      name: 'Mírně pokročilý',
    }
  }
  if (difficulty === 3) {
    return {
      size: 4,
      name: 'Pokročilý',
    }
  }
  if (difficulty === 4) {
    return {
      size: 5,
      name: 'Expert',
    }
  }
}

export const GamePage = () => {
  const { difficulty: stringDifficulty } = useParams();
  const difficulty = Number(stringDifficulty)
  let navigate = useNavigate();
  const { size, name } = currentDifficulty(difficulty);

  const [phaseGame, setPhaseGame] = useState(1);
  const [level, setLevel] = useState(1)
  const [userNumbers, setUserNumbers] = useState([]);
  const [generateNumbers, setGenerateNumbers] = useState([]);

  useEffect(() => {
    const RandomNumbers = GenerateRandomNumbers(level, size);
    setGenerateNumbers(RandomNumbers);
  }, []);

  const handleUserSelect = (index) => {
    let updatedNumbers;
    if (userNumbers.includes(index)) {
      updatedNumbers = userNumbers.filter((number) => number !== index);
    } else {
      updatedNumbers = [...userNumbers, index];
    }
    setUserNumbers(updatedNumbers);
  };

  const handleNewGame = () => {
    if (level === 5 && difficulty === 4) {
      navigate(`/difficulty`)
      return
    }

    if (level === 5) {
      navigate(`/game/difficulty/${difficulty + 1}`)
      setLevel(1)
    }
    else {
      setLevel(level + 1)
    }
    const RandomNumbers = GenerateRandomNumbers((level + 1), size);
    setGenerateNumbers(RandomNumbers);
    setUserNumbers([])
    setPhaseGame(1)
  }

  const handleRestartGame = () => {
    const RandomNumbers = GenerateRandomNumbers(level, size);
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
};
