import Item from './Item';
import PropTypes from 'prop-types';

const List = ({ list, direction, selected }) => {
  return (
    <div className="list flex column">
      {list.map((item) => (
        <Item key={item} item={item} direction={direction} selected={selected} />
      ))}
    </div>
  );
};

export default List;

List.propTypes = {
  list: PropTypes.array,
  direction: PropTypes.string,
  selected: PropTypes.function
};
