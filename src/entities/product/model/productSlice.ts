import { createSlice } from "@reduxjs/toolkit";
import type { TProduct } from "../../../shared/types/types.ts";
import { fetchGetCards } from "./fetchGetCards.ts";

type TInitialState = {
  products: Record<string, TProduct>;
  ids: string[];
};

const initialState: TInitialState = {
  products: {},
  ids: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetCards.pending, () => {});
    builder.addCase(fetchGetCards.fulfilled, (state, action) => {
      state.products = {};
      state.ids = [];

      action.payload.forEach((product) => {
        state.products[product.id] = product;

        state.ids.push(product.id);
      });
    });
    builder.addCase(fetchGetCards.rejected, () => {});
  },
});
