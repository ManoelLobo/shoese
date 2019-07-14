import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, totalPrice, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>
              <span className="sr-only">Product image</span>
            </th>
            <th>Product</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr>
              <td>
                <img src={item.image} alt={item.title} />
              </td>
              <td>
                <strong>{item.title}</strong>
                <span>{item.formattedPrice}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(item)}>
                    <MdRemoveCircleOutline
                      size={20}
                      color="#045488"
                      aria-hidden
                    />
                    <span className="sr-only">
                      Increase quantity of {item.title}
                    </span>
                  </button>
                  <label htmlFor={`amount-${item.id}`} className="sr-only">
                    Amount of {item.title}
                  </label>
                  <input
                    type="number"
                    readOnly
                    value={item.amount}
                    id={`amount-${item.id}`}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      increment(item);
                    }}
                  >
                    <MdAddCircleOutline size={20} color="#045488" aria-hidden />
                    <span className="sr-only">
                      Decrease quantity of {item.title}
                    </span>
                  </button>
                </div>
              </td>
              <td>
                <strong>{item.subtotal}</strong>
              </td>
              <td>
                <button type="button" onClick={() => removeFromCart(item.id)}>
                  <MdDelete size={20} color="#045488" />
                  <span className="sr-only">Remove from cart</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Process order</button>

        <footer>
          <Total>
            <span>Total</span>
            <strong>{totalPrice}</strong>
          </Total>
        </footer>
      </footer>
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  totalPrice: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  totalPrice: formatPrice(
    state.cart.reduce(
      (total, nextProduct) => total + nextProduct.price * nextProduct.amount,
      0
    )
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
