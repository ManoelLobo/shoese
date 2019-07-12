import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, CartLink } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Shoese" />
      </Link>

      <CartLink to="/cart">
        <div>
          <strong>My cart</strong>
          <span>6 items</span>
        </div>
        <MdShoppingBasket size={36} color="#f6f6fa" aria-hidden />
      </CartLink>
    </Container>
  );
}
