"use client";

import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useAppDispatch } from "@/app/hooks";
import { fetchData } from "@/features/transactions/transactionSlice";
import DataTable from "./components/DataTable";

const Dashboard = () => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (session?.user.id) {
      dispatch(fetchData({ session }));
    }
  }, [dispatch, session?.user.id]);

 
    return (
      <>
        <p>Signed in as {session?.user.email}</p>
        <DataTable/>
      </>
    );
 
};

export default Dashboard;
