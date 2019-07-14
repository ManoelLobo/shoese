export function addToCartRequest(productId) {
  return { type: '@cart/ADD_REQUEST', productId };
}

export function addToCartSuccess(product) {
  return { type: '@cart/ADD_SUCCESS', product };
}

export function removeFromCart(productId) {
  return { type: '@cart/REMOVE', id: productId };
}

export function updateAmountRequest(id, amount) {
  return { type: '@cart/UPDATE_AMOUNT_REQUEST', id, amount };
}

export function updateAmountSuccess(id, amount) {
  return { type: '@cart/UPDATE_AMOUNT_SUCCESS', id, amount };
}
