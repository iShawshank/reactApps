import { useEffect, useState } from 'react';
import { blankGrid, generateGrid } from './utils';

function App() {
  const [grid, setGrid] = useState([]);
  const [displayGrid, setDisplayGrid] = useState(
    JSON.parse(JSON.stringify(blankGrid))
  );
  const [prevItem, setPrevItem] = useState(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const generatedGrid = generateGrid();
    setGrid([...generatedGrid]);
  }, []);

  const handleCardClick = (rowIndex, itemIndex) => {
    if (
      prevItem?.value &&
      prevItem.rowIndex === rowIndex &&
      prevItem.itemIndex === itemIndex
    ) {
      return;
    }
    const newDisplayGrid = displayGrid;
    const currentItemValue = grid[rowIndex][itemIndex];
    newDisplayGrid[rowIndex][itemIndex] = currentItemValue;
    setDisplayGrid([...newDisplayGrid]);

    if (prevItem && prevItem.value >= 0) {
      if (prevItem.value !== currentItemValue) {
        setTimeout(() => {
          // Hide the cards
          newDisplayGrid[rowIndex][itemIndex] = -1;
          newDisplayGrid[prevItem.rowIndex][prevItem.itemIndex] = -1;
          setDisplayGrid([...newDisplayGrid]);
        }, 500);
      }
      setPrevItem(null);
    } else {
      setPrevItem({ value: currentItemValue, rowIndex, itemIndex });
    }

    if (JSON.stringify(grid) === JSON.stringify(newDisplayGrid)) {
      setCompleted(true);
    }
  };

  const resetGrid = (e) => {
    e.preventDefault();
    setDisplayGrid(JSON.parse(JSON.stringify(blankGrid)));
    setCompleted(false);
  };
  return (
    <div className="container">
      <h1>Match Game:</h1>
      <div className="grid">
        {displayGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((card, itemIndex) => (
              <div
                key={itemIndex}
                className="card"
                onClick={() => handleCardClick(rowIndex, itemIndex)}
              >
                {card >= 0 ? card : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
      {completed && (
        <button className="button" onClick={resetGrid}>
          Reset Grid
        </button>
      )}
    </div>
  );
}

export default App;
