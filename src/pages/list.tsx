import React from 'react';
import LayoutList from '@/layout/LayoutList';
import Filters from '@/components/list/filters/Filters';
import ListPlaces from '@/components/list/listPlaces/ListPlaces';
import localStyles from '@/components/list/List.module.scss';

const details = () => {
  const optionsRent = [
    {
      id: 1,
      value: 'rent',
      text: 'Alquilar',
    },
    {
      id: 0,
      value: 'sale',
      text: 'Comprar',
    },
  ];

  return (
    <>
      <LayoutList>
        <div className={localStyles.listHeader}>
          <h1 className={localStyles.listNumberPlaces}>
            21.563 casas y pisos en Madrid
          </h1>
        </div>
        <div className={localStyles.containerRadios}>
          {optionsRent.map((option) => (
            <label
              className={`${localStyles.customLabels} ${localStyles.selectLabel}`}
              key={option.id}
              htmlFor={option.value}
            >
              <input
                className={localStyles.customInputRadio}
                id={option.value}
                type="radio"
                value={option.value}
              />
              {option.text}
            </label>
          ))}
        </div>
        <div className={localStyles.listContent}>
          <Filters />
          <ListPlaces />
        </div>
      </LayoutList>
    </>
  );
};

export default details;
