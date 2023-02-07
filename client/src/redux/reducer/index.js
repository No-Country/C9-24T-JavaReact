const initialState = {
  product: [],
  orders: [],
};

export default function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case "GET_PRODUCT": {
      return {
        ...state,
        product: actions.payload,
        queryParams: actions.query,
      };
    }

    case "POST_PRODUCT":
      return {
        ...state,
        seller: actions.payload,
      };
  }
}
