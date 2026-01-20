import { createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder } from "../../../shared/api/api.ts";
import type { TUserData } from "../../../shared/types/types.ts";

export const createUserOrder = createAsyncThunk("order/createUserOrder", async (order: TUserData, { dispatch }) => {
  const res = await createOrder(order);

  return res;
});
