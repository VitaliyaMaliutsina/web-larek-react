import { createSlice } from "@reduxjs/toolkit";

type TModalView = "basket" | "card" | "checkout";

type TModalStep = "order" | "contacts" | "success" | "basket";

type TInitialState = {
  payload: string;
  isOpen: boolean;
  view: TModalView | null;
  step: TModalStep | null;
};

const initialState: TInitialState = {
  payload: "",
  isOpen: false,
  view: null,
  step: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.view = action.payload.view;
      state.payload = action.payload.payload;
      state.step = action.payload.step ?? null;
    },

    setCheckoutStep: (state, action) => {
      state.step = action.payload.step;
      if (action.payload.view) {
        state.view = action.payload.view;
      }
    },

    closeModal: (state) => {
      state.isOpen = false;
      state.step = null;
    },
  },
});

export const { openModal, closeModal, setCheckoutStep } = modalSlice.actions;
