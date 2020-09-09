import React from 'react';
export const initialState = {
    basket: [],
    netPrice : 0,
};

const reducer = (state, action) => {
    console.log(state);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state, basket: [...state.basket, action.item],
                netPrice : Number(state.netPrice) + Number(action.item.price),
            };
        case 'REMOVE_FROM_BASKET':
            return {
               ...state,
                basket: state.basket.filter(pk => (pk.id != action.key)) ,
                netPrice : Number(state.netPrice) - Number(action.price),
            };
        default:
            return state;
    }
};
export default reducer;