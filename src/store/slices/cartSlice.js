import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {cart: []},
    reducers: {
        addCartItem: (state, action) => {
            const found = state.cart.find((item) => item.itemData.id === action.payload.id)
            if (found) {
                found.quantity += 1;
            }
            else {
                state.cart.push({
                    itemData: action.payload,
                    quantity: 1
                })
            }
        },
        removeCartItem: (state, action) => {
            state.cart = state.cart.filter(item => {
                return item.itemData.id !== action.payload.id;
            })
        }
    },
})

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;