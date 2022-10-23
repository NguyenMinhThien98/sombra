import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import {rootReducer as reducer} from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = getDefaultMiddleware =>
  getDefaultMiddleware().concat(sagaMiddleware);
const devTools = process.env.NODE_ENV !== 'production';
const store = configureStore({reducer, middleware, devTools});

export default store;
