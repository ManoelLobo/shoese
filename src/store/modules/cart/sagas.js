import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { addToCartSuccess, updateAmountSuccess } from './actions';

import api from '../../../services/api';
import { formatPrice } from '../../../utils/format';

function* addToCart({ productId }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === productId)
  );

  const stock = yield call(api.get, `/stock/${productId}`);

  const stockAmount = stock.data.amount;
  const cartAmount = productExists ? productExists.amount : 0;
  const updatedAmount = cartAmount + 1;

  if (updatedAmount > stockAmount) {
    toast.error("We don't have this amount in stock!");
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(productId, updatedAmount));
  } else {
    const response = yield call(api.get, `/products/${productId}`);

    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error("We don't have this amount in stock!");
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
