const initialState = {
  product: [],
  orders: [],
  category: [],
};

export default function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case "GET_CATEGORY": {
      return {
        ...state,
        category: actions.payload,
        queryParams: actions.query,
      };
    }
  }
}
