"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable";
import axios from "axios";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);

  const headers = {
    auth: session?.user.accessToken,
    "Content-Type": "application/json",
  };

  const getData = async () => {
    if (session) {
      console.log(session)
      const { data } = await axios.get(
        `http://localhost:3000/api/user/${session.user.id}`,
        {
          headers,
        }
      );
      setUserData(data);
    }
  };

  useEffect(() => {
    getData();
  }, [session]);

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
        {userData ? (
          <DataTable data={userData} />
        ) : (
          <p>Loading data...</p>
        )}
      </>
    );
  }
};

export default Dashboard;

// {
// 	"name": "czpisy",
// 	"amount": "4.50",
// 	"category": "snacks"
// }

// HEADERS
// auth = access token
// Content-Type - application/json
