import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAppSelector } from "@/app/hooks";
import { signOut } from "next-auth/react";
import { Box } from "@mui/material";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
];

export default function DataTable() {
  const data = useAppSelector((state) => state.transactions.data);
  const loading = useAppSelector((state) => state.transactions.loading);
  const error = useAppSelector((state) => state.transactions.error);
  if (error) {
    // signOut();
    return <p>Error: {error}. Please re login.</p>;
  }
  return (
    <Box
    sx={{
      margin: 1,
      padding: 1,
      borderRadius: 5,
      backgroundColor: "primary.main",
      "&:hover": {
        backgroundColor: "primary.light",
      },
    }}
    >
      <DataGrid
        rows={(data as any) || []}
        columns={columns}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Box>
  );
}
