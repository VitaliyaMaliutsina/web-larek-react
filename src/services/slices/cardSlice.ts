import { createSlice } from "@reduxjs/toolkit";
import type { IProduct } from "../../types/types.ts";
import { fetchGetCards } from "../thunks/fetchGetCards.ts";

type TInitialState = {
  cards: IProduct[];
};

const initialState: TInitialState = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetCards.pending, (state) => {});
    builder.addCase(fetchGetCards.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
    builder.addCase(fetchGetCards.rejected, (state) => {});
  },
});
