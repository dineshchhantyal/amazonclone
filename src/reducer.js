import React from 'react';
export const initialState = {
    basket: [],
    netPrice : 0,
};

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state, basket: [...state.basket, action.item],
                netPrice : state.netPrice + action.item.price,
            };
        case 'REMOVE_FROM_BASKET':
            return {
               ...state,
                basket: state.basket.filter(pk => (pk.checkOutKey != action.outKey)) ,
                netPrice : state.netPrice - action.price,
            };
        default:
            return state;
    }
};
export default reducer;