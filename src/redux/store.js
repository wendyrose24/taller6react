import { configureStore } from '@reduxjs/toolkit';
import contadorReducer from './contadorSlice';

const store = configureStore({
  reducer: {
    contador: contadorReducer,
  },
});

export default store;
