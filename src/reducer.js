export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((pk) => pk.checkOutKey !== action.outKey),
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "EMPTY_BASKET":
      return {
        ...state,
        basket:[]
      };
    default:
      return state;
  }
};
export default reducer;
