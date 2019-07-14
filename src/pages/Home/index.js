import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

class Home extends Component {
  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amounts: PropTypes.shape().isRequired,
  };

  state = { products: [] };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = productId => {
    const { addToCartRequest } = this.props;

    addToCartRequest(productId);
  };

  render() {
    const { products } = this.state;
    const { amounts } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id.toString()}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formattedPrice}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#f6f6fa" />{' '}
                {amounts[product.id] || 0}
              </div>

              <span>Add to cart</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amounts: state.cart.reduce((amounts, nextProduct) => {
    amounts[nextProduct.id] = nextProduct.amount;

    return amounts;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
