import { useEffect, useState } from 'react';
import { Grid } from '../../Components/Grid/Grid';

const GenerateRandomNumbers = (count, size) => {

  const result = [];

  while (result.length < count) {
    const RandomNumber = Math.floor(Math.random() * (size * size))
    if (!result.includes(RandomNumber)) {
      result.push(RandomNumber)
    }
  }
  return result
}

export const GamePage = ({ size }) => {
  const [generateNumbers, setGenerateNumbers] = useState([])

  useEffect(() => {
    const RandomNumbers= GenerateRandomNumbers(2, size)
    setGenerateNumbers(RandomNumbers)
  },
    [])

console.log(generateNumbers)
  return (
    <div className="container">
      <Grid size={size} numbers={generateNumbers}/>
    </div>
  );
};
