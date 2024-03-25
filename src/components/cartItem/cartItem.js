import React from 'react'
import { removeCartItem } from '../../store/slices/cartSlice'
import { useDispatch } from 'react-redux'
export default function CartItem(props) {
    const dispatch = useDispatch();
    function removeItemFromCart(item) {
        dispatch(removeCartItem(item))
    }
    return (
        <tr className="border-bottom">
            <td style={{width: "15%"}}>
                <div className="d-flex justify-content-center w-100">
                    <img src={props.item.thumbnail} alt="" style={{width: "80%", height: "100px"}}/>
                </div>
            </td>
            <td style={{width: "40%"}}>{props.item.description}</td>
            <td style={{width: "20%"}}>
                <div className="container-fluid h-75">
                    <div className="row w-100 flex-nowrap">
                        <div className="col">
                            <button className="bg-danger"><i className="fas fa-minus"></i></button>
                        </div>
                        <div className="col text-center">
                            <span className="">{props.quantity}</span>
                        </div>
                        <div className="col">
                            <button className="bg-success"><i className="fas fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </td>
            <td style={{width: "15%"}}><button className="rmvbtn rounded" 
            onClick={() => removeItemFromCart(props.item)}>X</button></td>
            <td style={{width: "10%"}}>${props.item.price}</td>
        </tr>
    )
}
