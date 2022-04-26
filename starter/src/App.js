import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import {calculateTotals} from './features/cart/cartSlice'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from "react"

function App() {
 
  const dispatch = useDispatch()

  const {cartItems} = useSelector(store => store.cart)

  // everytime cartItems changes (in this case it's keeping track on calculateTotals reducer)
  // useEffect will be invoke because the dependecies array is looking at cartItems

  useEffect(()=>{
    dispatch(calculateTotals())
    //use Effect mira al array cartItems.
  }, [dispatch, cartItems])
  
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
