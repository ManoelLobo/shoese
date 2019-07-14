import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import { addToCartSuccess, updateAmount } from './actions';

import api from '../../../services/api';
import { formatPrice } from '../../../utils/format';

function* addToCart({ productId }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === productId)
  );

  if (productExists) {
    yield put(updateAmount(productId, productExists.amount + 1));
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

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
