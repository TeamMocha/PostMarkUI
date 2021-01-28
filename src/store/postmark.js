let initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

const postmarkStore = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export const resetStore = () => {
  return {
    type: 'RESET',
  };
};

export default postmarkStore;
