import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import localStyle from '@/components/common/base/loading/BaseLoading.module.scss';

interface BaseLoadingProps {
  loading: boolean;
}

const BaseLoading = ({ loading = false }: BaseLoadingProps) => {
  return (
    <Dialog
      open={loading}
      className={localStyle.containerDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent className={localStyle.content}>
        <div className={localStyle.spinnerContainer}>
          <CircularProgress />
        </div>
        <h1 className={localStyle.searchText}>Buscando...</h1>
      </DialogContent>
    </Dialog>
  );
};

export default BaseLoading;
