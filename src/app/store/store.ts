import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../../entities/product/model/productSlice.ts";
import { type TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from "react-redux";
import { modalSlice } from "../../entities/modal/model/modalSlice.ts";
import { basketSlice } from "../../entities/basket/model/basketSlice.ts";

const rootReducer = combineSlices(productSlice, modalSlice, basketSlice);

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
