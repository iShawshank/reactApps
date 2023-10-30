
import PropTypes from 'prop-types'

const Item = ({ item, direction, selected }) => {
  return (
    <div className='item flex'>
      <input type='checkbox' onChange={() => selected(direction, item)} />
      { item }
    </div>
  )
}

export default Item

Item.propTypes = {
  item: PropTypes.number,
  direction: PropTypes.string,
  selected: PropTypes.function
}