import ClassRoom from './0-classroom';

/**
 * Creates the array of {@link ClassRoom}s with the specific size.
 * @returns the array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
