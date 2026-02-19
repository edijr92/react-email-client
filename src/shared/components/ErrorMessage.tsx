import { Alert, AlertTitle } from "@mui/material";

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({
  message,
}: ErrorMessageProps) {
  return (
    <Alert severity="error" variant="outlined">
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  );
}
