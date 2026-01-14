import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  items: string[];
  price: number;
};

const initialState: TInitialState = {
  items: [],
  price: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    deleteItem(state, action) {
      state.items = state.items.filter((item) => item !== action.payload);
    },

    setPrice(state, action) {
      state.price = state.price + action.payload;
    },
  },
});

export const { addItem, deleteItem, setPrice } = basketSlice.actions;
