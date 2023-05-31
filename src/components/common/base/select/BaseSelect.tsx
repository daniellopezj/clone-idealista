import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

interface Option {
  value: string;
  label: string;
}

interface BaseSelectProps {
  label?: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: Option[];
}

const BaseSelect = ({ label, value, onChange, options }: BaseSelectProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select variant='outlined' value={value} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BaseSelect;
