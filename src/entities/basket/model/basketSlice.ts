import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  items: string[];
  index: number;
};

const initialState: TInitialState = {
  items: [],
  index: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.index = state.index + 1;
    },

    deleteItem(state, action) {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = basketSlice.actions;
