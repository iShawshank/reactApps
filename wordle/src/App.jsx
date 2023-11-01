import { createContext, useEffect, useState } from 'react';
import Grid from './Grid';
import Form from './Form';
const API_URL = 'https://wordle-game-api1.p.rapidapi.com/word';
import data from './data.json';

export const SolutionContext = createContext(null);

const startOfDay = new Date();
startOfDay.setUTCHours(0, 0, 0, 0);

function App() {
  const [count, setCount] = useState(0);
  const [words, setWords] = useState({
    0: '00000',
    1: '00000',
    2: '00000',
    3: '00000',
    4: '00000',
    5: '00000',
  });
  const [isFinal, setIsFinal] = useState(false);
  const [isSolved, setIsSolved] = useState(false);

  // Sets the solution for the day
  const [solution] = useState(data[startOfDay % data.length]);

  const addWord = (word) => {
    setWords({ ...words, [count]: word });
    setCount(count + 1);
    if (count + 1 > 5) {
      setIsFinal(true);
    }
  };

  useEffect(() => {
    if (Object.values(words).includes(solution)) {
      setIsFinal(true);
      setIsSolved(true);
    }
  }, [solution, words]);

  return (
    <SolutionContext.Provider value={solution}>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-10">
          iShawshank&apos;s Wordle
        </h2>
        <Grid words={Object.values(words)} />
        {isFinal ? (
          <p className="mt-4 font-bold text-xl">
            Game Over - you {isSolved ? 'Won!' : 'lost'}
          </p>
        ) : (
          <Form submitForm={addWord} />
        )}
      </div>
    </SolutionContext.Provider>
  );
}

export default App;
