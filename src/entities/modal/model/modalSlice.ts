import { createSlice } from "@reduxjs/toolkit";

type ModalType = "basket" | "card" | "stepOrder" | "stepContacts";

type TInitialState = {
  payload: string;
  isOpen: boolean;
  type: ModalType | null;
};

const initialState: TInitialState = {
  payload: "",
  isOpen: false,
  type: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.payload = action.payload.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.type = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
