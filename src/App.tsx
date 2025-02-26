// App.tsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import { addLab, editLab, Lab } from "./store/labSlice";
import DynamicForm from "./componets/dynamicForm/DynamicForm";
import GridComponent from "./componets/gridComponent/GridComponent";
import ModalComponent from "./componets/modalComponent/ModalComponent";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const labs = useSelector((state: RootState) => state.lab.labs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);

  const handleAddLab = () => {
    setSelectedLab(null);
    setIsModalOpen(true);
  };

  const handleEditLab = (lab: Lab) => {
    setSelectedLab(lab);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (data: Lab) => {
    if (selectedLab) {
      dispatch(editLab(data));
    } else {
      dispatch(addLab({ ...data, id: labs.length + 1 }));
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "black",
            marginTop: "20px",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(17, 18, 19, 0.3)",
            fontFamily: "Arial, sans-serif"
          }}
        >
          Laboratory Management System
        </h1>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 123, 255, 0.2)",
            transition: "background-color 0.3s ease, transform 0.2s ease"
          }}
          onClick={handleAddLab}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#0056b3";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#007bff";
            e.currentTarget.style.transform = "translateY(0)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.backgroundColor = "#004080";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.backgroundColor = "#0056b3";
          }}
        >
          Add Laboratory
        </button>
      </div>
      <GridComponent rowData={labs} onRowClicked={handleEditLab} />
      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <DynamicForm
          onSubmit={handleFormSubmit}
          defaultValues={selectedLab || undefined}
        />
      </ModalComponent>
    </div>
  );
};

export default App;
