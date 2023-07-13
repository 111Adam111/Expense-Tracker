import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "../features/transactions/transactionSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
