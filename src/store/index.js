import { createStore } from 'redux';

import reducer from './modules/rootReducer';

import tron from '../config/reactotron';

const enhancer =
  process.env.NODE_ENV === 'development' ? tron.createEnhancer() : null;

const store = createStore(reducer, enhancer);

export default store;
