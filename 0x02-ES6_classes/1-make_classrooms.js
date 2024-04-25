mport ClassRoom from './0-classroom';

/**
 * Initializes an array of `ClassRoom` instances with specific sizes.
 * @returns {Array} An array of `ClassRoom` instances.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
