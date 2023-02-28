import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice.js";
import productReducer from "./product/productSlice.js";
import modalDeliveryReducer from "./modalDelivery/modalDeliverySlice.js";
import formReducer from "./form/formSlice.js";
import orderReducer, {localStorageMeddileware} from "./order/orderSlice.js";


export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        order: orderReducer,
        modalDelivery: modalDeliveryReducer,
        form: formReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(localStorageMeddileware)
})