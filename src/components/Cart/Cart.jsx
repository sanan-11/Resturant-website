import React from 'react'
import './Cart.css'
import { useContext } from 'react'
// import {StoreContext} from '../con'

function Cart() {

    const {cardItems,food_list,removeFromCart} = useContext()
  return (
    <div>Cart</div>
  )
}

export default Cart