import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type Transactions = {
  name: string;
  amount: number;
  category: string;
};

export const fetchData = createAsyncThunk<Transactions, { session: any }>(
  "transactions/fetchData",
  async ({ session }) => {
    console.log("session:", session);
    console.log("session.user:", session?.user);
    const headers = {
      auth: session?.user.accessToken,
      "Content-Type": "application/json",
    };

    const response = await axios.get<Transactions>(
      `http://localhost:3000/api/user/${session?.user.id}`,
      {
        headers,
      }
    );
    console.log(response.data);
    return response.data;
  }
);

interface DataState {
  data: Transactions | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: null,
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<Transactions>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default transactionSlice.reducer;
