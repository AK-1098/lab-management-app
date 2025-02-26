// components/DynamicForm.tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Lab } from "../../store/labSlice";
import "./DynamicForm.css";

interface DynamicFormProps {
  onSubmit: (data: Lab) => void;
  defaultValues?: Lab;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  onSubmit,
  defaultValues
}) => {
  const { control, handleSubmit } = useForm<Lab>({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="dynamic-form">
      <div>
        <label>Lab Name</label>
        <Controller
          name="labName"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} required />}
        />
      </div>
      <div>
        <label>Location</label>
        <Controller
          name="location"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} required />}
        />
      </div>
      <div>
        <label>Contact Person</label>
        <Controller
          name="contactPerson"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} required />}
        />
      </div>
      <div>
        <label>Contact Number</label>
        <Controller
          name="contactNumber"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} required />}
        />
      </div>
      <div>
        <label>Services Offered</label>
        <Controller
          name="servicesOffered"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <input
              {...field}
              onChange={(e) => field.onChange(e.target.value.split(","))}
              required
            />
          )}
        />
      </div>
      <div>
        <label>Status</label>
        <Controller
          name="status"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select {...field} required>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          )}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
