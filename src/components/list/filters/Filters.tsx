import React, { useState } from 'react';
import BaseSelect from '@/components/common/base/select/BaseSelect';
import localStyles from '@/components/list/filters/Filters.module.scss';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { propertyType } from '@/types/FilterData.types';
interface FiltersProps {
  className: String;
}

const Filters = ({ className }: FiltersProps) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className={`${className} ${localStyles.filterContainer} `}>
      <Grid container className={localStyles.filterRow}>
        <span className={localStyles.filterTitle}>Tipo de inmueble</span>
        <BaseSelect
          value={selectedOption}
          onChange={handleOptionChange}
          options={propertyType}
        />
      </Grid>
      <Grid
        className={localStyles.filterRow}
        container
        justifyContent="left"
      >
        <span className={localStyles.filterTitle}>Precio</span>
        <Grid container>
          <Grid item className={localStyles.paddingItem} xs={6}>
            <BaseSelect
              value={selectedOption}
              onChange={handleOptionChange}
              options={options}
            />
          </Grid>
          <Grid item xs={6}>
            <BaseSelect
              value={selectedOption}
              onChange={handleOptionChange}
              options={options}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        className={localStyles.filterRow}
        container
        justifyContent="left"
      >
        <span className={localStyles.filterTitle}>Tamaño</span>
        <Grid container>
          <Grid item className={localStyles.paddingItem} xs={6}>
            <BaseSelect
              value={selectedOption}
              onChange={handleOptionChange}
              options={options}
            />
          </Grid>
          <Grid item xs={6}>
            <BaseSelect
              value={selectedOption}
              onChange={handleOptionChange}
              options={options}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        className={localStyles.filterRow}
        container
        justifyContent="left"
      >
        <span className={localStyles.filterTitle}>Caracteristicas</span>
        <Grid container>
          <Grid item className={localStyles.paddingItem} xs={12}>
            <FormControlLabel
              className={localStyles.label}
              control={<Checkbox />}
              label="Admite mascotas"
            />
          </Grid>
          <Grid  item className={localStyles.paddingItem} xs={12}>
            <FormControlLabel
              className={localStyles.label}
              control={<Checkbox />}
              label="Aire acondicionado"
            />
          </Grid>
          <Grid  item className={localStyles.paddingItem} xs={12}>
            <FormControlLabel
              className={localStyles.label}
              control={<Checkbox />}
              label="Ascensor"
            />
          </Grid>
          <Grid item className={localStyles.paddingItem} xs={12}>
            <FormControlLabel
              className={localStyles.label}
              control={<Checkbox />}
              label="Terraza"
            />
          </Grid>
          <Grid item className={localStyles.paddingItem} xs={12}>
            <FormControlLabel
              className={localStyles.label}
              control={<Checkbox />}
              label="Piscina"
            />
          </Grid>
          <Grid item className={localStyles.paddingItem} xs={12}>
            <FormControlLabel
              className={localStyles.label}
              control={<Checkbox />}
              label="Jardin"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Filters;
