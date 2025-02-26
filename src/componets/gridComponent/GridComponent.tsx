// components/GridComponent.tsx
import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Lab } from "../../store/labSlice";

import { ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface GridComponentProps {
  rowData: Lab[];
  onRowClicked: (lab: Lab) => void;
}

const GridComponent: React.FC<GridComponentProps> = ({
  rowData,
  onRowClicked
}) => {
  const columnDefs: ColDef<Lab>[] = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "labName", headerName: "Lab Name", flex: 2 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "contactPerson", headerName: "Contact Person", flex: 2 },
    { field: "contactNumber", headerName: "Contact Number", flex: 2 },
    {
      field: "servicesOffered",
      headerName: "Services Offered",
      flex: 3,
      valueGetter: (params) => params.data?.servicesOffered?.join(", ") || ""
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1
    }
  ];
  console.log(rowData);
  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        onRowClicked={(event) => {
          if (event.data) {
            onRowClicked(event.data);
          } else {
            console.warn("Row data is undefined");
          }
        }}
      />
    </div>
  );
};

export default GridComponent;
