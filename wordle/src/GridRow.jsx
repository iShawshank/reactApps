import PropTypes from 'prop-types';
import GridItem from './GridItem';
import { useContext } from 'react';
import { SolutionContext } from './App';

const GridRow = ({ word }) => {
  const solution = useContext(SolutionContext);

  return (
    <div className="flex gap-2 my-1">
      {word.split('').map((char, index) => {
        const charExists = solution.includes(char);
        let className = '';
        if(charExists) {
          className = solution[index] === char ? 'match' : 'exists'; 
        } else if (char !== '0') {
          className = 'noMatch'
        }

        return (
          <GridItem key={index} character={char} className={className} />
        )
        })}
    </div>
  );
};

GridRow.propTypes = {
  word: PropTypes.string,
};

export default GridRow;
