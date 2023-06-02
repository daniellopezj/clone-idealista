import React from 'react';
import { styled } from '@mui/material/styles';
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
  name: string;
  onChange: (event: SelectChangeEvent) => void;
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
  },
}));

const BaseSelect = ({
  label,
  value,
  onChange,
  options,
  name,
}: BaseSelectProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        variant="outlined"
        value={value}
        onChange={onChange}
        input={<BootstrapInput />}
      >
        {options.map((option) => (
          <MenuItem
            className={`${localStyle.customMenuItem}`}
            key={option.value}
            value={option.value}
            disableRipple
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BaseSelect;
