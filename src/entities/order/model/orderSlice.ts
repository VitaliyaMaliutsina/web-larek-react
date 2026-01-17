import { createSlice } from "@reduxjs/toolkit";
import type { TOrder } from "../../../shared/types/types.ts";

type TInitialState = {};

const initialState: TOrder = {
  payment: null,
  email: "",
  phone: "",
  address: "",
  total: "",
  items: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    handlePaymentMethod: (state, action) => {
      state.payment = action.payload;
    },
    handleAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { handlePaymentMethod, handleAddress } = orderSlice.actions;
