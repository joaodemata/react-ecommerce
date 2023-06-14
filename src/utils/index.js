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
