import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isOpen: false
}

const modalDeliverySlice = createSlice({
    name: 'modalDelivery',
    initialState,
    reducers: {
        openModal: state => {
            state.isOpen = true
        },
        closeModal: state => {
            state.isOpen = false
        }
    }
})

export const {openModal, closeModal} = modalDeliverySlice.actions

export default modalDeliverySlice.reducer