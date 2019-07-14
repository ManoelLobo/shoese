import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { connect } from 'react-redux';

import { Container, ProductTable, Total } from './styles';

function Cart({ dispatch, cart }) {
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
                  <button type="button">
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
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#045488" aria-hidden />
                    <span className="sr-only">
                      Decrease quantity of {item.title}
                    </span>
                  </button>
                </div>
              </td>
              <td>
                <strong>$ 199.98</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_CART', id: item.id })
                  }
                >
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
            <strong>$ 666.16</strong>
          </Total>
        </footer>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
