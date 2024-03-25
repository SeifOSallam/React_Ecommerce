import React, { useEffect, useState } from 'react'
import CartItem from '../cartItem/cartItem';
import { useSelector } from 'react-redux';
import './userCart.css'

export default function UserCart() {
    const { cart } = useSelector((state) => state.cart);
    const [sum, setSum] = useState(0)

    useEffect(() => {
        if (cart) {
            let totalSum = 0
            cart.forEach((item) => {
                totalSum += item.itemData.price * item.quantity
            })
            setSum(totalSum)
        }
    }, [cart])

    return (
        <div className="w-75 m-auto">
            <h1>Cart</h1>
            <table className="w-100">
                <tr className="border-bottom">
                    <th style={{width: "15%"}}></th>
                    <th style={{width: "40%"}}>Description</th>
                    <th style={{width: "20%"}}>Quantity</th>
                    <th style={{width: "15%"}}>Remove</th>
                    <th style={{width: "10%"}}>Price</th>
                </tr>
                { (cart && cart.length > 0)?
                    cart.map((item, index) => {
                        return(
                            <CartItem key={index} id={index}
                             item={item.itemData} quantity={item.quantity}></CartItem>
                        )
                    })
                : null
                }
            </table>

            {(cart && cart.length !== 0)?
            <div className="w-25 mt-3 me-0 container">
                <div className="row">
                    <div className="col">
                        Total
                    </div>
                    <div className="col">
                        $<span id="price">{sum}</span>
                    </div>
                </div>
            </div>
            :   
            <h1>Cart is Empty</h1>
            }
        </div>
    )
}
