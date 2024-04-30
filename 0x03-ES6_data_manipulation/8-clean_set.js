/**
 * Joins the set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - the collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @author sebsibe solomon https://github.com/sebsibe23
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
