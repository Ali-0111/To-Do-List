export default function indexBasedSort(collection) {
  collection.forEach((element, i) => {
    element.index = i + 1;
  });
}