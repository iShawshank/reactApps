import PropTypes from 'prop-types'
import GridRow from './GridRow'

const Grid = ({ words }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      {words.map((word, index) => <GridRow key={index} word={word} /> )}
    </div>
  )
}

Grid.propTypes = {
  words: PropTypes.array,
}

export default Grid