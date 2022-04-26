import {configureStore} from "@reduxjs/toolkit"
import cartReducer  from './features/cart/cartSlice'

//store will have the state that we'll use in the entire app

export const store = configureStore({

    reducer: {
        cart: cartReducer,
        

    }, 

})
