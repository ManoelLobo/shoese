import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

import { Container, CartLink } from './styles';
import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Shoese" />
      </Link>

      <CartLink to="/cart">
        <div>
          <strong>My cart</strong>
          <span>
            {cartSize} item{cartSize > 1 ? 's' : ''}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#f6f6fa" aria-hidden />
      </CartLink>
    </Container>
  );
}

export default connect(state => ({ cartSize: state.cart.length }))(Header);
