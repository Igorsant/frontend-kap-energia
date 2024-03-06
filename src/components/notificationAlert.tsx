import { Alert, Snackbar } from "@mui/material";

export const NotificationAlert = ({
  message,
  open,
  setOpen
}: {
  message: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
