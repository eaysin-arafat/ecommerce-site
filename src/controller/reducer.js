/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
import { ADD_CART, ADD_FAVOURITE, REMOVE, REMOVE_ITEM } from "./type";

const initialCartState = {
  carts: [],
};

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_CART:
      // return {
      //   ...state,
      //   carts: [...state.carts, action.payload],
      // };
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case REMOVE:
      const data = state.carts.filter((item) => item.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case REMOVE_ITEM:
      const itemIndex_desc = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex_desc].qty >= 1) {
        // const delete_item = (state.carts[itemIndex_desc].qty -= 1);
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIndex_desc].qty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload.id);
        return {
          ...state,
          carts: data,
        };
      }

    default:
      return state;
  }
};

const initialFavouriteCartState = {
  favouriteCart: [],
};

export const favouriteCartReducer = (
  state = initialFavouriteCartState,
  { type, payload }
) => {
  switch (type) {
    case ADD_FAVOURITE:
      // return {
      //   ...state,
      //   carts: [...state.carts, action.payload],
      // };
      const itemIndexFavourite = state.favouriteCart.findIndex(
        (item) => item.id === payload.id
      );
      if (itemIndexFavourite >= 0) {
        state.favouriteCart[itemIndexFavourite].qty += 1;
      } else {
        const temp = { ...payload, qty: 1 };
        return {
          ...state,
          favouriteCart: [...state.favouriteCart, temp],
        };
      }

    case REMOVE:
      const data = state.favouriteCart.filter((item) => item.id !== payload);
      return {
        ...state,
        favouriteCart: data,
      };

    case REMOVE_ITEM:
      const itemIndex_desc = state.favouriteCart.findIndex(
        (item) => item.id === payload.id
      );
      if (state.favouriteCart[itemIndex_desc].qty >= 1) {
        // const delete_item = (state.carts[itemIndex_desc].qty -= 1);
        return {
          ...state,
          favouriteCart: [...state.favouriteCart],
        };
      } else if (state.favouriteCart[itemIndex_desc].qty === 1) {
        const data = state.favouriteCart.filter((el) => el.id !== payload.id);
        return {
          ...state,
          favouriteCart: data,
        };
      }

    default:
      return state;
  }
};
