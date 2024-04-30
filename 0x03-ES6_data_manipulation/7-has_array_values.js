/**
 * Checks if the set contains each element in an array.
 * @param {Set} set - a collection of unique items.
 * @param {*} array - a array of items.
 * @author sebsibe solomon https://github.com/sebsibe23
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
