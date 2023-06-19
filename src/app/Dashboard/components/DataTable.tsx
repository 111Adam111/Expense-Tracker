import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAppSelector } from "@/app/hooks";

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
  console.log(data);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data || []}
        columns={columns}
        loading={loading}
        error={error ? "Error: " + error : undefined}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
