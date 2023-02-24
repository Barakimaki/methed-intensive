import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice.js";
import productReducer from "./product/productSlice.js";
import orderReducer, {localStorageMeddileware} from "./order/orderSlice.js";


export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        order: orderReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMeddileware)
})