// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from "../features/authentication/authenticationSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        cart: cartReducer,
    },
});

export default store;
