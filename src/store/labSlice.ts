// store/labSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Lab {
  id: number;
  labName: string;
  location: string;
  contactPerson: string;
  contactNumber: string;
  servicesOffered: string[];
  status: string;
  testMethods: {
    method: string;
    parameters: string[];
    sampleType: string;
  }[];
}

interface LabState {
  labs: Lab[];
}

const initialState: LabState = {
  labs: [
    {
      id: 1,
      labName: "Viswa Lab Chennai",
      location: "Chennai",
      contactPerson: "Dr. Ramesh",
      contactNumber: "9876543210",
      servicesOffered: ["Chemical Analysis", "Oil Testing", "Water Quality"],
      status: "Active",
      testMethods: [
        {
          method: "ASTM D445",
          parameters: ["Viscosity", "Temperature"],
          sampleType: "Oil"
        }
      ]
    },
    {
      id: 2,
      labName: "GreenTech Lab",
      location: "Hyderabad",
      contactPerson: "Dr. Rajesh",
      contactNumber: "8765432109",
      servicesOffered: [
        "Environmental Testing",
        "Air Quality",
        "Soil Analysis"
      ],
      status: "Inactive",
      testMethods: [
        {
          method: "EPA 6010",
          parameters: ["Metal Detection", "Soil Composition"],
          sampleType: "Soil"
        }
      ]
    },
    {
      id: 3,
      labName: "MediCheck Diagnostics",
      location: "Mumbai",
      contactPerson: "Dr. Anita",
      contactNumber: "7654321098",
      servicesOffered: ["Blood Analysis", "Urine Testing", "Genetic Screening"],
      status: "Active",
      testMethods: [
        {
          method: "CLIA",
          parameters: ["Hemoglobin", "DNA Sequencing"],
          sampleType: "Blood"
        }
      ]
    },
    {
      id: 4,
      labName: "AquaPure Testing Lab",
      location: "Delhi",
      contactPerson: "Dr. Vikas",
      contactNumber: "6543210987",
      servicesOffered: ["Water Quality", "Heavy Metal Analysis"],
      status: "Active",
      testMethods: [
        {
          method: "IS 10500",
          parameters: ["pH Level", "TDS", "Heavy Metals"],
          sampleType: "Water"
        }
      ]
    },
    {
      id: 5,
      labName: "BioGen Lab",
      location: "Chennai",
      contactPerson: "Dr. Priya",
      contactNumber: "5432109876",
      servicesOffered: ["Genomics", "Molecular Biology", "Pathology"],
      status: "Inactive",
      testMethods: [
        {
          method: "PCR",
          parameters: ["Gene Expression", "Pathogen Detection"],
          sampleType: "DNA"
        }
      ]
    }
  ]
};

const labSlice = createSlice({
  name: "lab",
  initialState,
  reducers: {
    addLab: (state, action: PayloadAction<Lab>) => {
      const newLab = {
        id: state.labs.length + 1,
        labName: action.payload.labName,
        location: action.payload.location,
        contactPerson: action.payload.contactPerson,
        contactNumber: action.payload.contactNumber,
        servicesOffered: action.payload.servicesOffered,
        status: action.payload.status,
        testMethods: action.payload.testMethods || []
      };
      state.labs.push(newLab);
    },
    editLab: (state, action: PayloadAction<Lab>) => {
      const index = state.labs.findIndex((lab) => lab.id === action.payload.id);
      if (index !== -1) {
        state.labs[index] = action.payload;
      }
    }
  }
});

export const { addLab, editLab } = labSlice.actions;
export default labSlice.reducer;
