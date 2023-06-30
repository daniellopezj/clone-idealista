import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface SnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
}
const BaseSnackBar = ({ open, message, onClose }: SnackbarProps) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        onClose={onClose}
        autoHideDuration={6000}
      >
        <Alert severity="error">{message}</Alert>
      </Snackbar>
    </div>
  );
};

export default BaseSnackBar;
