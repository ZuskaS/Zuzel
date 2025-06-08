import './Grid.css';

export const Grid = ({ size, numbers, onUserClick }) => {

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`,
      }}
    >
      {Array.from({ length: size * size }, (_, index) => {
        const selectedCell = numbers.find(item => item.id === index) 
        return(
        <div
          className='cell'
          key={index}
          onClick={() => onUserClick(index)}
          style={{backgroundColor: selectedCell?.color}}
        ></div>
      )})}
    </div>
  );
};
