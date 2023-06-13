function saveLocal(arr) {
  localStorage.setItem('data', JSON.stringify(arr));
}

export default saveLocal;