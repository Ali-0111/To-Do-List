function makeIndex(array) {
  array.forEach((element, i) => {
    element.index = i + 1;
  });
}

function saveLocal(arr) {
  makeIndex(arr);
  localStorage.setItem('data', JSON.stringify(arr));
}

export default saveLocal;