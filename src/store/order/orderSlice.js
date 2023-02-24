import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    orderList: JSON.parse(localStorage.getItem('order') || '[]'),
}

export const localStorageMeddileware = store => next => action => {

    const nextAction = next(action)
    if(nextAction.type.startsWith('order/')){
        localStorage.setItem('order', JSON.stringify(store.getState().order.orderList))
    }
    return nextAction;
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addProduct(state, action){
            const product = state.orderList
                .find(item => item.id === action.payload.id)
            if(product){
                product.count += 1
            } else {
                state.orderList.push({...action.payload, count: 1})
            }
        }
    }
})

export  const {addProduct} = orderSlice.actions

export default orderSlice.reducer