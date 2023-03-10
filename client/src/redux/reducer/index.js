// REDUCERS: son funciones puras(solo se debe VER,OBTENER y DEVOLVER el estado , sin mutarlo ) que toman como parametro el estado anteriror y la acction y regresa un nuevo estado.

const initialState = {
  category: [],
  product: [],
  categoryProducts: [],
  productDescription: [],
  search: false,
  itemsCarrito: [],
  saldo: null,
  pedido: null,
  sesion: { jwt: null, isAuthenticated: false, profile: null },
  searchValue: "",
};

export default function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case "@login/create": {
      return {
        ...state,
        sesion: actions.payload,
      };
    }

    case "GET_CATEGORY": {
      return {
        ...state,
        category: actions.payload,
      };
    }

    case "GET_SALDO": {
      return {
        ...state,
        saldo: actions.payload,
      };
    }
    case "@saldo/update": {
      return {
        ...state,
        saldo: actions.payload,
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
    case "@carrito/agregarProducto": {
      return {
        ...state,
        itemsCarrito: [...state.itemsCarrito, actions.payload],
      };
    }

    case "@carrito/actualizarCounterProducto":
      const updatedElements = state.itemsCarrito.map((element) => {
        if (element.idProduct === actions.payload.id) {
          return { ...element, ...actions.payload.data };
        }
        return element;
      });
      return { ...state, itemsCarrito: updatedElements };

    case "@carrito/counterModify": {
      const indice = state.itemsCarrito.findIndex(
        (elemento) => elemento.idProduct === actions.payload.idProduct
      );
      return {
        ...state,
        itemsCarrito: [...state.itemsCarrito.slice(0, indice), actions.payload],
      };
      /* const cambiado = [
        ...copia.slice(0, indice),
        5,
        ...copia.slice(indice + 1),
      ]; */
    }

    case "@carrito/counterModify": {
      const indice = state.itemsCarrito.findIndex(
        (elemento) => elemento.idProduct === actions.payload.idProduct
      );
      return {
        ...state,
        itemsCarrito: [...state.itemsCarrito.slice(0, indice), actions.payload],
      };
      /* const cambiado = [
        ...copia.slice(0, indice),
        5,
        ...copia.slice(indice + 1),
      ]; */
    }

    case "@carrito/eliminarProducto": {
      const indice = state.itemsCarrito.findIndex(
        (elemento) => elemento.idProduct === actions.payload.idProduct
      );

      console.log(indice, "INDICE");
      return {
        ...state,
        itemsCarrito: [
          ...state.itemsCarrito.slice(0, indice),
          ...state.itemsCarrito.slice(indice + 1),
        ],
      };
    }

    case "@carrito/vaciarCarrito": {
      return {
        ...state,
        itemsCarrito: [],
      };
    }

    case "@pedido/crear": {
      return {
        ...state,
        pedido: actions.payload,
      };
    }

    case "@producto/buscar": {
      return {
        ...state,
        searchValue: actions.payload,
      };
    }

    case "@producto/borrarBuscar": {
      return {
        ...state,
        searchValue: actions.payload,
      };
    }

    default:
      state;
  }
}
// cart: [state.cart.filter(c => c.postId !== actions.payload.postId), actions.payload]
