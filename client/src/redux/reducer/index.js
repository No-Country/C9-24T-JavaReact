const initialState = {
  category: [],
  product: [],
  categoryProducts: [],
  productDescription: [],
  search: false,
  cart: [],
};

export default function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case "GET_CATEGORY": {
      return {
        ...state,
        category: actions.payload,
      };
    }

    case "GET_PRODUCT": {
      return {
        ...state,
        product: actions.payload,
      };
    }

    case "GET_CATEGORY_PRODUCTS": {
      return {
        ...state,
        categoryProducts: actions.payload,
      };
    }

    case "GET_PRODUCT_DESCRIPTION": {
      return {
        ...state,
        productDescription: actions.payload,
      };
    }
    case "@navbar/togleSearch": {
      return {
        ...state,
        search: actions.payload,
      };
    }

    case "ADD_CART":
      return {
        ...state,
        cart: [...state.cart, actions.payload],
      };

    case "MODIFY_CART":
      return {
        ...state,
        cart: [
          state.cart.filter((c) => c.postId !== actions.payload.postId),
          actions.payload,
        ],
      };

    default:
      state;
  }
}
