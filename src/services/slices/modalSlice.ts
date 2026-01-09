import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  selectedCard: string | null;
};

const initialState: TInitialState = {
  selectedCard: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSelectedCard(state, action) {
      state.selectedCard = action.payload;
    },
  },
});

export const { openSelectedCard } = modalSlice.actions;
