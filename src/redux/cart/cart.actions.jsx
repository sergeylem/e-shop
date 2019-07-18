import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGLE_CART_HIDDEN 
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

