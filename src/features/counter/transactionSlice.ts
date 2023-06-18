import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type Transactions = {
  name: string;
  amount: number;
  category: string;
};

export const fetchData = createAsyncThunk<Transactions, string>(
  "transaction/fetchData",
  async (userId) => {
    const response = await axios.get<Transactions>(
      `http://localhost:3000/api/user/${userId}`
    );
    return response.data;
  }
);

interface DataState {
  item: Transactions | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  item: null,
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default transactionSlice.reducer;

