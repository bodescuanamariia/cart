const reducer = (state, action, id) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    // return .filter((item) => item.id !== id);
  }
  return state;
};
export default reducer;
