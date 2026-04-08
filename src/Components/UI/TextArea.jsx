// * MUI
import Textarea from "@mui/joy/Textarea";

export default function TextArea({ inputType }) {
  const rowNumber = 8;

  return (
    <label className="w-4/12 text-sm font-semibold">
      {inputType}
      <Textarea
        minRows={rowNumber}
        maxRows={rowNumber}
        size="sm"
        sx={{
          "--Textarea-focusedThickness": "0",
          width: "100%",
          fontWeight: "400",
          color: "black",
        }}
        placeholder="Enter your opinion"
      />
    </label>
  );
}
