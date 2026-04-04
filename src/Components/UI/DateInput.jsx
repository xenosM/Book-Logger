// MUI
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateInput({ dateInputLabel }) {
  return (
    <DatePicker
      label={dateInputLabel}
      slotProps={{
        textField: {
          size: "small",
        },
      }}
    />
  );
}
