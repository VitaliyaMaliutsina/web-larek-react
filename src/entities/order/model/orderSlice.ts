import { createSlice } from "@reduxjs/toolkit";
import type { TOrder } from "../../../shared/types/types.ts";
import { createUserOrder } from "./createUserOrder.ts";

const initialState: TOrder = {
  payment: null,
  email: "",
  phone: "",
  address: "",
  total: 0,
  items: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPaymentMethod: (state, action) => {
      state.payment = action.payload.payment;
    },
    setAddress: (state, action) => {
      state.address = action.payload.address;
    },
    setTotal: (state, action) => {
      state.total = action.payload.total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUserOrder.pending, () => {});
    builder.addCase(createUserOrder.fulfilled, () => {});
    builder.addCase(createUserOrder.rejected, () => {});
  },
});

export const { setPaymentMethod, setAddress, setTotal } = orderSlice.actions;
