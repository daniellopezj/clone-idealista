import React, { useContext, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { SnackbarContext } from '@/context/Snackbar.context';

interface SnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
}
const BaseSnackBar = () => {
  const { open, message, closeSnackbar } = useContext(SnackbarContext);

  useEffect(() => {
    setTimeout(() => {
      closeSnackbar();
    }, 6000);
  }, [open]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      autoHideDuration={6000}
    >
      <Alert variant="filled" severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default BaseSnackBar;
