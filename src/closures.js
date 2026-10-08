/**
 * @typedef {object} Counter
 * @property {() => number} increment збільшує значення на 1 і повертає нове
 * @property {() => number} reset повертає значення до початкового і повертає його
 * @property {() => number} value поточне значення
 */

/**
 * C5.1. Створює лічильник.
 * Специфікація — ТЗ, C5.
 *
 * @param {number} [start]
 * @returns {Counter}
 */
export function createCounter(start = 0) {
  let counter = start;

  return {
    increment: function () {
      return ++counter;
    },
    reset: function () {
      return (counter = start);
    },
    value: function () {
      return counter;
    },
  };
}

/**
 * C5.2. Обгортає `fn` так, що вона виконується щонайбільше один раз.
 * Специфікація — ТЗ, C5.
 *
 * @template {(...args: any[]) => any} F
 * @param {F} fn
 * @returns {F}
 */
export function once(fn) {
  let isUsed = false;
  let result;

  return function (...argu) {
    if (!isUsed) {
      result = fn(...argu);
      isUsed = true;
    }
    return result;
  };
}

/**
 * C5.3. Запам'ятовує результати `fn` для кожного значення її єдиного аргументу.
 * Специфікація — ТЗ, C5.
 *
 * @template T, R
 * @param {(arg: T) => R} fn
 * @returns {(arg: T) => R}
 */
export function memoize(fn) {
  const memoryBank = new Map();

  return function (arg) {
    if (memoryBank.has(arg)) {
      return memoryBank.get(arg);
    }
    const result = fn(arg);
    memoryBank.set(arg, result);
    return result;
  };
}
