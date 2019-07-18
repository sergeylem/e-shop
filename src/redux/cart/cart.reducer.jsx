import React from 'react';
import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGLE_CART_HIDDEN:
            return { 
                ...state, 
                hidden: !state.hidden
            }
        default:
            return state;
    }

}

export default CartReducer;
