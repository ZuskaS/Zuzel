import { useEffect, useState } from 'react';
import { Phase1 } from '../../Components/Phase1/Phase1';
import { Phase2 } from '../../Components/Phase2/Phase2';
import { Phase3 } from '../../Components/Phase3/Phase3';

const GenerateRandomNumbers = (count, size) => {
  const result = [];

  while (result.length < count) {
    const RandomNumber = Math.floor(Math.random() * (size * size));
    if (!result.includes(RandomNumber)) {
      result.push(RandomNumber);
    }
  }
  return result;
};

export const GamePage = ({ size }) => {
  const [phaseGame, setPhaseGame] = useState(1);
  const [userNumbers, setUserNumbers] = useState([]);
  const [generateNumbers, setGenerateNumbers] = useState([]);

  useEffect(() => {
    const RandomNumbers = GenerateRandomNumbers(2, size);
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

  if (phaseGame === 1) {
    return <Phase1 size={size} generateNumbers={generateNumbers} />;
  }
  if (phaseGame === 2) {
    return (
      <Phase2
        size={size}
        numbers={userNumbers}
        onUserClick={handleUserSelect}
        onEvaluate={()=>setPhaseGame(3)}
      />
    );
  }
  if (phaseGame === 3) {
    return (
      <Phase3
        size={size}
        generateNumbers={generateNumbers}
        userNumbers={userNumbers}
      />
    );
  }
};
