import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
          <tr>
            <td>
              <img
                src="https://dummyimage.com/300x300/fff/000000&text=This+is+a+shoe+picture"
                alt="shoe"
              />
            </td>
            <td>
              <strong>SHOO</strong>
              <span>$ 99.99</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline
                    size={20}
                    color="#045488"
                    aria-hidden
                  />
                  <span className="sr-only">Increase quantity</span>
                </button>
                <label htmlFor="amount-1" className="sr-only">
                  Amount of product 1
                </label>
                <input type="number" readOnly value={2} id="amount-1" />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#045488" aria-hidden />
                  <span className="sr-only">Decrease quantity</span>
                </button>
              </div>
            </td>
            <td>
              <strong>$ 199.98</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#045488" />
                <span className="sr-only">Remove from cart</span>
              </button>
            </td>
          </tr>
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
