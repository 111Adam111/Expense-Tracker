import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchData } from "next-auth/client/_utils";
import DataTable from "./components/DataTable";

const Dashboard = () => {
  const { data: session } = useSession();

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.transactions.data); // Update state slice name
  const loading = useSelector((state: RootState) => state.transactions.loading); // Update state slice name
  const error = useSelector((state: RootState) => state.transactions.error); // Update state slice name

  useEffect(() => {
    if (session?.user.id) {
      dispatch(fetchData(session?.user.id));
    }
  }, [dispatch, session?.user.id]);

  if (session) {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
        <DataTable />
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Dashboard;










// "use client";

// import { useSession } from "next-auth/react";
// import React, { useEffect, useState } from "react";
// import DataTable from "./components/DataTable";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../store";
// import { Transactions } from "@/features/counter/transactionSlice";
// import { createAsyncThunk } from "@reduxjs/toolkit";


//   export const getData = createAsyncThunk<Transactions, void>('data/fetchSomeData', async () => {
//     const { data: session, status } = useSession();
//     console.log(session);
//     const headers = {
//       auth: session?.user.accessToken,
//       "Content-Type": "application/json",
//     };
//     if (session) {
//       console.log(session);
//       const { data } = await axios.get<Transactions>(
//         `http://localhost:3000/api/user/${session.user.id}`,
//         {
//           headers,
//         }
//       );
//       return data
//     }
//   });

// const Dashboard = () => {
//     const { data: session, status } = useSession();

//   const dispatch = useDispatch();
//   const data = useSelector((state: RootState) => state.data.item);
//   const loading = useSelector((state: RootState) => state.data.loading);
//   const error = useSelector((state: RootState) => state.data.error);

//   useEffect(() => {
//     dispatch(getData());
//   }, [dispatch]);

//   if (status === "authenticated") {
//     return (
//       <>
//         <p>Signed in as {session.user.email}</p>
//       <DataTable/>
//       </>
//     );
//   }
// };

// export default Dashboard;

