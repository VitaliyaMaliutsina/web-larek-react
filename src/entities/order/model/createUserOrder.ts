import { createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder } from "../../../shared/api/api.ts";
import type { TOrder } from "../../../shared/types/types.ts";

export const createUserOrder = createAsyncThunk("order/createUserOrder", async (order: TOrder) => {
  const res = await createOrder(order);
  return res;
});
