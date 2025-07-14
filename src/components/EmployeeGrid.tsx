import React from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export type Employee = {
  name: string;
  email: string;
  phone?: string;
  role: string;
  joiningDate: string;
};

interface EmployeeGridProps {
  employees: Employee[];
}

const EmployeeGrid: React.FC<EmployeeGridProps> = ({ employees }) => {
  const columnDefs: ColDef<Employee>[] = [
    { field: "name", sortable: true, filter: true },
    { field: "email", sortable: true, filter: true },
    { field: "phone", headerName: "Phone Number", sortable: true, filter: true },
    { field: "role", sortable: true, filter: true },
    { field: "joiningDate", headerName: "Joining Date", sortable: true, filter: true },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-12">
      <div className="rounded-2xl shadow-2xl border border-gray-200 overflow-hidden bg-white">
        <div className="ag-theme-alpine custom-ag-grid" style={{ width: "100%", height: 500 }}>
          <AgGridReact<Employee>
            rowData={employees}
            columnDefs={columnDefs}
            domLayout="autoHeight"
            theme="legacy"
          />

        </div>
      </div>
    </div>
  );
};

export default EmployeeGrid;
