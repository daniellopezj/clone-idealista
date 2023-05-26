import React, { useEffect, useMemo, useState } from 'react';
import LayoutList from '@/layout/LayoutList';
import Filters from '@/components/list/filters/Filters';
import ListPlaces from '@/components/list/listPlaces/ListPlaces';
import localStyles from '@/components/list/List.module.scss';
import { useRouter } from 'next/router';
import { FiltersPlaces, ResponseListFloor } from '@/types/Places.types';

const details = () => {
  const router = useRouter();
  const { locationId, locationName } = router.query;
  const [resultRequest, setResultRequest] = useState<ResponseListFloor | null>(
    {} as ResponseListFloor,
  );
  const [params, setParams] = useState({
    country: 'es',
    locationId,
    locationName,
    operation: 'rent',
    numPage: 1,
    maxItems: 100,
    locale: 'es',
    sort: 'asc',
  } as FiltersPlaces);

  const fetchData = useMemo(
    () => async () => {
      console.log('memo'); //request to listFloor
    },
    [params],
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
        <div className={localStyles.listContainer}>
          {resultRequest && (
            <div className={localStyles.listContent}>
              <Filters />
              <ListPlaces className={localStyles.listPlaces} places={[]} />
              {/* <ListPlaces className={localStyles.listPlaces} places={resultRequest.elementList} /> */}
            </div>
          )}
        </div>
      </LayoutList>
    </>
  );
};

export default details;
