import React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import localStyle from '@/components/common/base/select/BaseSelect.module.scss';
import { SelectOption } from '@/types/general.types';

interface BaseSelectProps {
  label?: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: SelectOption[];
}

const BootstrapInput = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid #838383`,
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
}));


const BaseSelect = ({ label, value, onChange, options }: BaseSelectProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        variant="outlined"
        value={value}
        onChange={onChange}
        input={<BootstrapInput />}
      >
        {options.map((option) => (
          <MenuItem  className={localStyle.customMenuItem} key={option.value} value={option.value} disableRipple>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BaseSelect;
