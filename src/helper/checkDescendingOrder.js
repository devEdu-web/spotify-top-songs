function isDescending(array) {
  let descending = 'null';

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] == undefined) return descending;
    if (array[i] >= array[i + 1]) {
      descending = true;
    } else {
      descending = false;
    }
  }
}
export default isDescending;
