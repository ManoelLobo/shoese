import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './modules/rootReducer';
import saga from './modules/rootSaga';

import tron from '../config/reactotron';

const sagaMonitor =
  process.env.NODE_ENV === 'development' ? tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(
        tron.createEnhancer(),
        applyMiddleware(sagaMiddleware)
      )
    : applyMiddleware(sagaMiddleware);

const store = createStore(reducer, enhancer);

sagaMiddleware.run(saga);

export default store;
