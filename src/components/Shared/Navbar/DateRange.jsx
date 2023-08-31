import { useContext, useState } from "react"; // Import useState
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { FilterContext } from "../../../Providers/FilterProvider";

export default function DateRange() {
  // Initialize state for the selected date range
  const { selectedDateRange, setSelectedDateRange } = useContext(FilterContext);
  return (
    <div className="bg-white relative z-30">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateRangePicker"]}>
          {/* Use the `onChange` prop to update the state when date range changes */}
          <DateRangePicker
            localeText={{ start: "Check-in", end: "Check-out" }}
            value={selectedDateRange}
            onChange={(newValue) => setSelectedDateRange(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
