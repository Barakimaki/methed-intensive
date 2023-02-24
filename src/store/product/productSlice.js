import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_URL, POSTFIX} from "../../../consts.js";
import {categoryRequestAsync} from "../category/categorySlice.js";

const initialState = {
    products: [],
    error: ''
}

export const productRequestAsync = createAsyncThunk(
    'product/fetch',
    (category) =>
        fetch(`${API_URL}${POSTFIX}?category=${category} `)
            .then(req => req.json())
            .catch(err => ({err}))
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(productRequestAsync.pending, state => {
                state.error = ''
            })
            .addCase(productRequestAsync.fulfilled, (state, action) => {
                state.error = ''
                state.products = action.payload
            })
            .addCase(categoryRequestAsync.rejected, (state, action) => {
                state.error = action.payload.error
            })
    }
})

export default productSlice.reducer