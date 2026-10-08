/** @typedef {import('./normalize.js').Show} Show */

/**
 * C3. Повертає новий масив серіалів, відсортований за полем `key`.
 * Специфікація — ТЗ, C3.
 *
 * @param {Show[]} shows
 * @param {'name' | 'year' | 'rating'} key
 * @param {'asc' | 'desc'} [direction]
 * @returns {Show[]}
 */
export function sortShows(shows, key, direction = "asc") {
  let finalResult = [...shows].sort((firstargument, secondargument) => {
    if (firstargument[key] === null && secondargument[key] === null) return 0;
    if (firstargument[key] === null) return 1;
    if (secondargument[key] === null) return -1;

    let result;
    if (key === "name") {
      result = firstargument[key].localeCompare(secondargument[key]);
    } else {
      result = firstargument[key] - secondargument[key];
    }
    return direction === "desc" ? -result : result;
  });
  return finalResult;
}
