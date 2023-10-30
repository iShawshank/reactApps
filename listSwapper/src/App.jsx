import { useState } from 'react';
import List from './List';
import Actions from './Actions';
import { removeItemsFromArray } from './utils';

function App() {
  const list = [1, 2, 3, 4];
  const [leftList, setLeftList] = useState(list);
  const [rightList, setRightList] = useState([]);
  const [leftSelected, setLeftSelected] = useState([]);
  const [rightSelected, setRightSelected] = useState([]);

  const handleSelected = (direction, item) => {
    let selectionArray = [];
    let setMethod = null;

    if (direction === 'left') {
      selectionArray = leftSelected;
      setMethod = setLeftSelected;
    } else {
      selectionArray = rightSelected;
      setMethod = setRightSelected;
    }

    const index = selectionArray.indexOf(item);

    if (index === -1) {
      // add it
      setMethod((selectionArray) => [...selectionArray, item]);
    } else {
      // remove it
      setMethod(selectionArray.splice(index, 1));
    }
  };

  const handleMove = (direction) => {
    if (direction === 'left') {
      setLeftList([...leftList, ...rightSelected]);
      setRightList(removeItemsFromArray(rightList, rightSelected));
      setRightSelected([]);
    } else {
      // add selected to rightList
      setRightList([...rightList, ...leftSelected]);
      setLeftList(removeItemsFromArray(leftList, leftSelected));
      setLeftSelected([]);
    }
  };

  return (
    <div className="flex">
      <List
        direction="left"
        list={leftList}
        selected={handleSelected}
      />
      <Actions handleMove={handleMove} />
      <List
        direction="right"
        list={rightList}
        selected={handleSelected}
      />
    </div>
  );
}

export default App;
