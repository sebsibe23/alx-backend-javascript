/**
 * Changes a quantity of unique grocery items to 100.
 * @param {Map<String, number>} map - A map of the name of a
 * grocery and its quantity.
 * @author sebsibe solomon https://github.com/sebsibe23
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
