import { useState, useEffect, useRef } from 'react';
import './Grid.css';

export const Grid = ({ size, numbers, onUserClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cellRefs = useRef([]);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) {
      cellRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex, hasInteracted]);


  const handleKeyDown = (e) => {
    let newIndex = activeIndex;

    if (!hasInteracted) setHasInteracted(true);


    if (e.key === 'ArrowRight' && (activeIndex + 1) % size !== 0) newIndex++;
    if (e.key === 'ArrowLeft' && activeIndex % size !== 0) newIndex--;
    if (e.key === 'ArrowDown' && activeIndex + size < size * size)
      newIndex += size;
    if (e.key === 'ArrowUp' && activeIndex - size >= 0) newIndex -= size;

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onUserClick?.(activeIndex);
    }
  };

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`,
      }}
    >
      {Array.from({ length: size * size }, (_, index) => {
        const selectedCell = numbers.find((item) => item.id === index);
        return (
          <div
            className={`cell ${activeIndex === index ? 'focused' : ''}`}
            key={index}
            ref={(el) => (cellRefs.current[index] = el)}
            tabIndex={hasInteracted && activeIndex === index ? 0 : -1
            } onClick={() => onUserClick?.(index)}
            onKeyDown={handleKeyDown}
            style={{ backgroundColor: selectedCell?.color }}
          ></div>
        );
      })}
    </div>
  );
};
