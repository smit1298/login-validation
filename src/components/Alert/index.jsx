import { Alert } from "@mui/material";

export default function AlertComponent({
  type = "error",
  message,
  variant = "filled",
  sx
}) {
  return message ? (
    <Alert variant={variant} severity={type} sx={{ width: "100%", ...sx }}>
      {message}
    </Alert>
  ) : null;
}
