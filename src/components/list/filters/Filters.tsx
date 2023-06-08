import React, { ChangeEvent, useState } from 'react';
import BaseSelect from '@/components/common/base/select/BaseSelect';
import localStyles from '@/components/list/filters/Filters.module.scss';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
  propertyType,
  minPrice,
  maxPrice,
  minSize,
  maxSize,
} from '@/types/FilterData.types';
import { FiltersPlaces } from '@/types/Places.types';
import { SelectChangeEvent } from '@mui/material';
interface FiltersProps {
  className: String;
  filters: FiltersPlaces;
  handleFilter: (filter: FiltersPlaces) => void;
}

const Filters = ({ className, filters, handleFilter }: FiltersProps) => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    const updatedObject = { ...filters, [name]: value };
    handleFilter(updatedObject);
  };
  const handleChangeCheck = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, checked } = event.target;

    if (name === 'petsPolicy') {
      const updatedObject = {
        ...filters,
        petsPolicy: checked ? 'allowed' : '',
      };
      handleFilter(updatedObject as FiltersPlaces);
    } else {
      const updatedObject = { ...filters, [name]: checked };
      handleFilter(updatedObject);
    }
  };

  return (
    <div className={`${className} ${localStyles.filterContainer} `}>
      <Grid container className={localStyles.filterRow}>
        <span className={localStyles.filterTitle}>Tipo de inmueble</span>
        <BaseSelect
          name="propertyType"
          value={filters.propertyType}
          onChange={handleChange}
          options={propertyType}
        />
      </Grid>
      <Grid className={localStyles.filterRow} container justifyContent="left">
        <span className={localStyles.filterTitle}>Precio</span>
        <Grid container>
          <Grid item className={localStyles.paddingItem} xs={6}>
            <BaseSelect
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              options={minPrice}
            />
          </Grid>
          <Grid item xs={6}>
            <BaseSelect
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              options={maxPrice}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid className={localStyles.filterRow} container justifyContent="left">
        <span className={localStyles.filterTitle}>Tamaño</span>
        <Grid container>
          <Grid item className={localStyles.paddingItem} xs={6}>
            <BaseSelect
              name="minSize"
              value={filters.minSize}
              onChange={handleChange}
              options={minSize}
            />
          </Grid>
          <Grid item xs={6}>
            <BaseSelect
              name="maxSize"
              value={filters.maxSize}
              onChange={handleChange}
              options={maxSize}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid className={localStyles.filterRow} container justifyContent="left">
        <span className={localStyles.filterTitle}>Caracteristicas</span>
        <Grid container>
          <Grid item className={localStyles.paddingItem} xs={12}>
            <FormControlLabel
              className={localStyles.label}
              control={
                <Checkbox name="petsPolicy" onChange={handleChangeCheck} />
              }
              label="Admite mascotas"
            />
          </Grid>
          <Grid item className={localStyles.paddingItem} xs={12}>
            <FormControlLabel
              className={localStyles.label}
              control={
                <Checkbox name="airConditioning" onChange={handleChangeCheck} />
              }
              label="Aire acondicionado"
            />
          </Grid>
          <Grid item className={localStyles.paddingItem} xs={12}>
            <FormControlLabel
              className={localStyles.label}
              control={
                <Checkbox name="elevator" onChange={handleChangeCheck} />
              }
              label="Ascensor"
            />
          </Grid>
          <Grid item className={localStyles.paddingItem} xs={12}>
            <FormControlLabel
              className={localStyles.label}
              control={<Checkbox name="terrace" onChange={handleChangeCheck} />}
              label="Terraza"
            />
          </Grid>
          <Grid item className={localStyles.paddingItem} xs={12}>
            <FormControlLabel
              className={localStyles.label}
              control={
                <Checkbox name="swimmingPool" onChange={handleChangeCheck} />
              }
              label="Piscina"
            />
          </Grid>
          <Grid item className={localStyles.paddingItem} xs={12}>
            <FormControlLabel
              className={localStyles.label}
              control={<Checkbox name="garden" onChange={handleChangeCheck} />}
              label="Jardin"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Filters;
