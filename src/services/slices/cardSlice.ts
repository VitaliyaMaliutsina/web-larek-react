import { createSlice } from "@reduxjs/toolkit";
import type { IProduct } from "../../types/types.ts";

type TInitialState = {
  cards: IProduct[];
};

const initialState: TInitialState = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});
