import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  selectedCard: string;
  isOpen: boolean;
};

const initialState: TInitialState = {
  selectedCard: "",
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSelectedCard(state, action) {
      state.selectedCard = action.payload;
      state.isOpen = true;
    },
    closeSelectedCard(state) {
      state.isOpen = false;
    },
  },
});

export const { openSelectedCard, closeSelectedCard } = modalSlice.actions;
