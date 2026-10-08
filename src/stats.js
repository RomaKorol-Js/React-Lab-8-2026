/** @typedef {import('./normalize.js').Show} Show */

/**
 * @typedef {object} GenreStats
 * @property {number} count скільки серіалів мають цей жанр
 * @property {number | null} averageRating середня оцінка цих серіалів
 */

/**
 * C4. Рахує статистику для кожного жанру.
 * Специфікація — ТЗ, C4.
 *
 * @param {Show[]} shows
 * @returns {Record<string, GenreStats>} ключ — назва жанру
 */
export function genreStats(shows) {
  const statsCollector = {};

  shows.forEach((show) => {
    for (const genre of show.genres) {
      if (!statsCollector[genre]) {
        statsCollector[genre] = {
          count: 0,
          averageRating: 0,
        };
      }
      statsCollector[genre].count += 1;

      if (typeof show.rating === "number") {
        statsCollector[genre].averageRating += show.rating;
      }
    }
  });

  const finalResult = {};

  for (const genre in statsCollector) {
    const stats = statsCollector[genre];

    finalResult[genre] = {
      count: stats.count,
      averageRating:
        Math.round((stats.averageRating / stats.count) * 100) / 100,
    };
  }
  return finalResult;
}
