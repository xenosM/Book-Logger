// * MUI
import Textarea from "@mui/joy/Textarea";
import { maxWidth, width } from "@mui/system";

export default function TextArea() {
  const rowNumber = 8;

  return (
    <label className="w-4/12 text-sm font-semibold">
      Likes
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
        //   slots={{ textarea: "InnerTextarea" }}
        //   slotProps={{ textarea: { placeholder: "A placeholder" } }}
        placeholder="Enter what you liked about the book"
      />
    </label>
  );
}
