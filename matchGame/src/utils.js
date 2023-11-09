export const blankGrid = [
  [-1, -1, -1, -1],
  [-1, -1, -1, -1],
  [-1, -1, -1, -1],
];

export const generateGrid = () => {
  const numArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  const array = JSON.parse(JSON.stringify(blankGrid));

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      const num = Math.floor(Math.random() * numArray.length);
      array[i][j] = numArray[num];
      numArray.splice(num, 1);
    }
  }

  return array;
};
