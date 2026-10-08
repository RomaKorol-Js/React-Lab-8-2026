/** @typedef {import('./normalize.js').Show} Show */

/**
 * @typedef {object} FilterOptions
 * @property {string | null} [query] частина назви
 * @property {string | null} [genre] жанр
 * @property {number | null} [minRating] мінімальна оцінка
 */

/**
 * C2. Повертає серіали, які відповідають усім заданим фільтрам.
 * Специфікація — ТЗ, C2.
 *
 * @param {Show[]} shows
 * @param {FilterOptions} [options]
 * @returns {Show[]}
 */
export function filterShows(shows, options) {
  let FinalResult = [...shows];

  if (options.query) {
    FinalResult = FinalResult.filter((show) =>
      show.name.toLowerCase().includes(options.query.trim().toLowerCase()),
    );
  }
  if (options.genre) {
    FinalResult = FinalResult.filter((show) =>
      show.genres.includes(options.genre),
    );
  }
  if (options.minRating != undefined) {
    FinalResult = FinalResult.filter(
      (show) => show.rating >= options.minRating,
    );
  }

  return FinalResult;
}
