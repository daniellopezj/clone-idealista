import React, { createContext, useState } from 'react';

type SnackbarProviderProps = {
  children: React.ReactNode;
};

type SnackbarContextType = {
  open: boolean;
  message: string;
  openSnackbar: (message: string) => void;
  closeSnackbar: () => void;
};

export const SnackbarContext = createContext<SnackbarContextType>({
  open: false,
  message: '',
  openSnackbar: () => {},
  closeSnackbar: () => {},
});

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openSnackbar = (message: string) => {
    setOpen(true);
    setMessage(message);
    console.log(message)
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider
      value={{ open, message, openSnackbar, closeSnackbar }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
