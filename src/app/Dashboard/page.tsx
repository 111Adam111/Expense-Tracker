"use client";

import { useSession } from "next-auth/react";
import "chart.js/auto";
import React, { useEffect } from "react";
import { useAppDispatch } from "@/app/hooks";
import { fetchData } from "@/features/transactions/transactionSlice";
import DataTable from "./components/DataTable";
import DoughnutChart from "./components/DoughnutChart";
// import BarChart from "./components/BarChart";

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
      {/* <BarChart /> */}
      <DoughnutChart />
      <DataTable />
    </>
  );
};

export default Dashboard;
