import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCards } from "../../utils/api/api.ts";

export const fetchGetCards = createAsyncThunk("cards/getCards", async () => {
  const res = await getCards();
  return res;
});
