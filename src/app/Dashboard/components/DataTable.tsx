import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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

export default function DataTable({ data }: any) {
  console.log(data);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
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
