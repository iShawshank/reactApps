import PropTypes from 'prop-types';

const GridItem = ({ character, className }) => {

  return (
    <div className={'gridItem ' + className}>
      {character === '0' ? '' : character}
    </div>
  );
};

GridItem.propTypes = {
  character: PropTypes.string,
  className: PropTypes.string,
};

export default GridItem;
