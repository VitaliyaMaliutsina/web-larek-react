import { createSlice } from "@reduxjs/toolkit";
import type { TPayment, TSuccessOrder } from "../../../shared/types/types.ts";
import { createUserOrder } from "./createUserOrder.ts";

type TInitialState = {
  payment: TPayment;
  address: string;
  total: number;
  isSuccess: boolean;
  isPending: boolean;
  isError: boolean;
};

const initialState: TInitialState = {
  payment: null,
  address: "",
  total: 0,
  isSuccess: false,
  isPending: false,
  isError: false,
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
    clearOrder: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(createUserOrder.pending, (state, action) => {
      state.isSuccess = false;
      state.isPending = true;
      state.isError = false;
    });
    builder.addCase(createUserOrder.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isPending = false;
      state.isError = false;
    });
    builder.addCase(createUserOrder.rejected, (state, action) => {
      state.isSuccess = false;
      state.isPending = false;
      state.isError = true;
    });
  },
});

export const { setPaymentMethod, setAddress, setTotal } = orderSlice.actions;
