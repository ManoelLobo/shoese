import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://dummyimage.com/300x300/fff/000000&text=This+is+a+shoe+picture"
          alt="Sneakers"
        />
        <strong>Super Stepper</strong>
        <span>$ 99.99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#f6f6fa" /> 6
          </div>

          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://dummyimage.com/300x300/fff/000000&text=This+is+a+shoe+picture"
          alt="Sneakers"
        />
        <strong>Super Stepper</strong>
        <span>$ 99.99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#f6f6fa" />6
          </div>

          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://dummyimage.com/300x300/fff/000000&text=This+is+a+shoe+picture"
          alt="Sneakers"
        />
        <strong>Super Stepper</strong>
        <span>$ 99.99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#f6f6fa" />6
          </div>

          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://dummyimage.com/300x300/fff/000000&text=This+is+a+shoe+picture"
          alt="Sneakers"
        />
        <strong>Super Stepper</strong>
        <span>$ 99.99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#f6f6fa" />6
          </div>

          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://dummyimage.com/300x300/fff/000000&text=This+is+a+shoe+picture"
          alt="Sneakers"
        />
        <strong>Super Stepper</strong>
        <span>$ 99.99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#f6f6fa" />6
          </div>

          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://dummyimage.com/300x300/fff/000000&text=This+is+a+shoe+picture"
          alt="Sneakers"
        />
        <strong>Super Stepper</strong>
        <span>$ 99.99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#f6f6fa" />6
          </div>

          <span>Add to cart</span>
        </button>
      </li>
    </ProductList>
  );
}
