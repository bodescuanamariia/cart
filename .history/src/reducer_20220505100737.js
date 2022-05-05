const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    const newTours = tours.filter((item) => item.id !== id);
    return { ...state };
  }
  return state;
};
export default reducer;
