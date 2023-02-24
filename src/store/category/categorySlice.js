import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_URL, POSTFIX} from "../../../consts.js";

const initialState = {
    category: [],
    error: '',
    activeCategory: 0,
};

export const categoryRequestAsync = createAsyncThunk(
    'category/fetch',
    () =>
        fetch(`${API_URL}${POSTFIX}/category`)
            .then(req => req.json())
            .catch(err => ({err}))
)

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory(state, action) {
            state.activeCategory = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(categoryRequestAsync.pending, (state) => {
                state.error = ''
            })
            .addCase(categoryRequestAsync.fulfilled, (state, action) => {
                state.error = ''
                state.category = action.payload
            })
            .addCase(categoryRequestAsync.rejected, (state, action) => {
                state.error = action.payload.error
            })
    }
})

export const {changeCategory} = categorySlice.actions

export default categorySlice.reducer