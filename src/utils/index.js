/**
 * This function calculates total price of a new order
 * @param {Array} _products - cartProducts Array of objects
 * @returns {Number} Total price
 */
export const totalPrice = (_products) => {
  let sum = 0;

  _products.forEach((_product) => {
    sum += parseFloat(_product.price);
  });

  return sum;
};

/**
 *
 * @version        :1.0.0
 * @description    :Extract a value from localstorage an parse it
 * @param {String} key - key of item
 * @returns any
 *
 */

export const extractAndParseLocalStorage = (_key) => {
  const ITEM = localStorage.getItem(_key);

  if (ITEM) {
    return JSON.parse(ITEM);
  } else {
    return null;
  }
};
