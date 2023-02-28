import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {closeModal} from "../modalDelivery/modalDeliverySlice";
import {clearOrder} from "../order/orderSlice";


const initialState = {
    name: '',
    phone: '',
    format: 'delivery',
    address: '',
    floor: '',
    intercom: '',
    error: ''
}

export const submitForm = createAsyncThunk(
    'form/submit',
    async (data, {dispatch, rejectWithValue}) => {
        try {
            const response = await fetch('https://cloudy-slash-rubidium.glitch.me/api/order', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if(!response.ok){
                throw new Error('Error')
            }

            dispatch(clearOrder())
            dispatch(closeModal())

            return await response.json()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateFormValue: (state, action) => {
            state[action.payload.field] = action.payload.value
        }
    },
    extraReducers: builder => {
        builder
            .addCase(submitForm.pending, (state) => {
                state.error = ''

            })
            .addCase(submitForm.fulfilled, (state, action) => {
                state.error = ''
                state.response=action.payload
                state.name = ''
                state.phone = ''
                state.format = 'delivery'
                state.address = ''
                state.floor = ''
                state.intercom = ''
            })
            .addCase(submitForm.rejected, (state, action)=>{
                state.error = action.payload
            })
    }
})

export const {updateFormValue} = formSlice.actions

export default formSlice.reducer