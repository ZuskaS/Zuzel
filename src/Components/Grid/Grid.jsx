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
      {Array.from({ length: size * size }, (_, index) => (
        <div
          className={`cell ${numbers.find(item => item.id === index) ? 'selected' : ''}`}
          key={index}
          onClick={() => onUserClick(index)}
        ></div>
      ))}
    </div>
  );
};
