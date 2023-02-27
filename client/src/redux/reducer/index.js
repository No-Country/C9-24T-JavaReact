// REDUCERS: son funciones puras(solo se debe VER,OBTENER y DEVOLVER el estado , sin mutarlo ) que toman como parametro el estado anteriror y la acction y regresa un nuevo estado.

const initialState = {
  category: [],
  product: [],
  categoryProducts: [],
  productDescription: [],
  search: false,
  itemsCarrito: [],
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
    case "@carrito/cantidadProducto": {
      return {
        ...state,
        itemsCarrito: [...state.itemsCarrito, actions.payload],
      };
    }

    case "ADD_CART":
      return {
        ...state,
        cart: [...state.cart, actions.payload],
      };

    case "@carrito/actualizarCounterProducto":
      const updatedElements = state.itemsCarrito.map((element) => {
        if (element.idProduct === actions.payload.id) {
          return { ...element, ...actions.payload.data };
        }
        return element;
      });
      return { ...state, itemsCarrito: updatedElements };

    default:
      state;
  }
}
