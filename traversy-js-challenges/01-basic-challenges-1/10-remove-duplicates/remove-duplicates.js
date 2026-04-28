function removeDuplicates(array) {
  const newArray = new Set(array);

  return [...newArray];
}

module.exports = removeDuplicates;
