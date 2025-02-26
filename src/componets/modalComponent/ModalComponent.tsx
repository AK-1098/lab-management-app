import React from "react";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  children
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 8,
          maxWidth: "90vw",
          maxHeight: "80vh",
          overflow: "auto"
        }}
      >
        {children}
        <button
          onClick={onClose}
          style={{
            border: "none",
            width: "100px",
            padding: "10px",
            marginTop: "1rem",
            backgroundColor: "gray",
            color: "white"
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
