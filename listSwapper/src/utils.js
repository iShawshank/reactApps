export const removeItemsFromArray = (
  originalArray,
  selectedArray
) => {
  for (let i = 0; i < selectedArray.length; i++) {
    const index = originalArray.indexOf(selectedArray[i]);
    originalArray.splice(index, 1);
  }
  return originalArray;
};
