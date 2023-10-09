import { configureStore } from '@reduxjs/toolkit';
import vendingSlice from './vendingSlice';
import productSlice from './productSlice';

const store = configureStore({
    reducer: {
        vending: vendingSlice.reducer,
        products: productSlice.reducer
    }
});

export default store;