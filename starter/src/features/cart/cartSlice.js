import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
    cartItems, 
    amount: 0,
    total: 0, 
    isLoading: true,
};

const cartSlice = createSlice({
    name: 'cart', 
    initialState,
    reducers: {

    clearCart: (state) => {
        state.cartItems = [];
    }, 

    removeItem: (state, action) => {
    const idItem = action.payload;
    state.cartItems = state.cartItems.filter(item => item.id !== idItem)
   
},

    increase: (state, {payload}) => {
        const cartItems = state.cartItems.find(item => item.id === payload.id);
        cartItems.amount = cartItems.amount+1
    }, 

    decrease: (state, {payload}) => {
        const cartItems = state.cartItems.find(item => item.id === payload.id);
        cartItems.amount =  cartItems.amount-1
        // cartItems.amount <= 0 ? cartItems.amount :
    }, 

    calculateTotals: (state) => {
        let amount = 0; 
        let total = 0;
        state.cartItems.forEach(item=> {
            amount += item.amount;
            total += item.amount * item.price
        })
        state.amount = amount;
        state.total = total 
    }
}
});
export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions
export default cartSlice.reducer;
