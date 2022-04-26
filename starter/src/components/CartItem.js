import React from 'react'
import { ChevronUp, ChevronDown } from "../icons"
import { removeItem , increase, decrease} from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = (props) => {
const dispatch = useDispatch()
    return (
        <div className='cart-item'>
            <img src={props.img} />
            <div>
                <h4>
                    {props.title}
                </h4>
                <p className='item-price'>{props.price}</p>
                <button className='remove-btn' onClick={()=> dispatch(removeItem(props.id))}>
                    Remove
                </button>
            </div>
            <div>
                <button className='amount-btn' onClick={()=> dispatch(increase(props))}><ChevronUp /></button>

                <p className='amount'>{props.amount}</p>
                <button 
                className='amount-btn' 
                onClick={()=> {
                    //props.amount === 1 coz if I pressed the arrow down again it will be 0 so we dont need it in the card
                    //as we'll not buying it
                    if(props.amount === 1){
                        dispatch(removeItem(props.id));
                        //return is set here so it doesnt keep on executing the code
                        return;
                    }
                    dispatch(decrease(props))}}><ChevronDown /></button>
            </div>
        </div>


    )
}


export default CartItem