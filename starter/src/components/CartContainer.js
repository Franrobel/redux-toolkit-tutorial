import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { clearCart } from '../features/cart/cartSlice'

const CartContainer = () => {

    const dispatch = useDispatch()

const { cartItems, amount, total } = useSelector((state => state.cart))



    if (amount < 1) {
        return (
            <section className='cart'>
                <header className='empty-cart'>
                    <h2>Your Bag</h2>
                    <h4>is currently empty</h4>
                </header>
            </section>)
    }
    return (
        <>
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                </header>
                <div >
                    {cartItems.map(cart => <CartItem key={cart.id} {...cart} />)}
                </div>
                <footer >
                    <hr />
                    <div className='cart-total'>
                        <h4>total <span>${total.toFixed(2)}</span></h4>
                    </div>
                    <button className='btn clear-btn' onClick={()=> 
                        dispatch(clearCart())
                        }>clear cart</button>
                </footer>
            </section>
        </>
    )
}

export default CartContainer