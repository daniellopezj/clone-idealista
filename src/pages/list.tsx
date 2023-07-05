import React, { useState, useEffect, useRef } from 'react';
import { backend } from '@/api/backend';
import LayoutList from '@/layout/LayoutList';
import Filters from '@/components/list/filters/Filters';
import ListFloor from '@/components/list/listFloor/ListFloor';
import EmptyList from '@/components/list/emptyList/EmptyList';
import localStyles from '@/components/list/List.module.scss';
import { useRouter } from 'next/router';
import { FiltersPlaces, ResponseListFloor } from '@/types/Places.types';
import { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import BaseLoading from '@/components/common/base/loading/BaseLoading';
import { SnackbarContext } from '@/context/Snackbar.context';

const List = () => {
  const [resultRequest, setResultRequest] = useState<ResponseListFloor | null>(
    null,
  );
  const { apiListFloors } = backend();
  const { openSnackbar } = useContext(SnackbarContext);
  const router = useRouter();
  const { locationId, locationName, operation } = router.query;
  const [loading, setLoading] = useState(true);
  const initialized = useRef(false);
  const [params, setParams] = useState({
    country: 'es',
    // locationId: '0-EU-ES-28-07-sadasd001-079',
    locationId: '0-EU-ES-28-07-001-079',
    locationName: 'Madrid, Madrid',
    operation: 'rent',
    numPage: 1,
    maxItems: 25,
    locale: 'es',
    sort: 'asc',
    propertyType: 'homes',
    minPrice: 'Min',
    maxPrice: 'Max',
    minSize: 'Min',
    maxSize: 'Max',
    garage: false,
    airConditioning: false,
    elevator: false,
    terrace: false,
    swimmingPool: false,
    garden: false,
    petsPolicy: '',
  } as FiltersPlaces);

  useEffect(() => {
    if (router.isReady) {
      setParams({
        ...params,
        locationId: (locationId as string) || params.locationId,
        locationName: (locationName as string) || params.locationName,
        operation: (operation as 'rent' | 'sale') || params.operation,
      });
    }
  }, [router.isReady]);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await apiListFloors(params);
          setResultRequest(res);
          setLoading(false);
          initialized.current = false;
        } catch (error) {
          openSnackbar(
            'se ha generado un error, ya se ha notificado al administrador',
          );
          router.push('/');
        }
      };
      fetchData();
    }
  }, [params]);

  const handleFilter = (newParams: FiltersPlaces) => {
    setParams(newParams);
  };

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

  const onchangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    openSnackbar('se ha generado un error');
    console.log();
    setParams({ ...params, numPage: value });
  };

  const handleSelectOperation = (event: any) => {
    openSnackbar('se ha generado un error');
    setParams({ ...params, operation: event.target.value });
  };

  return (
    <LayoutList>
      <BaseLoading loading={loading}></BaseLoading>
      <div className={localStyles.listHeader}>
        {resultRequest && (
          <h1 className={localStyles.listNumberPlaces}>
            {resultRequest?.total} casas y pisos en alquiler en{' '}
            {resultRequest?.filter?.locationName}
          </h1>
        )}
      </div>
      <div className={localStyles.listContainer}>
        <aside className={localStyles.listContactFilers}>
          <div className={localStyles.listContactMe}>
            <span> Trabajemos Juntos </span>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              startIcon={<ChatIcon />}
            >
              Contactame!
            </Button>
          </div>
          {resultRequest && (
            <Filters
              handleFilter={handleFilter}
              className=""
              filters={params}
            />
          )}
          <Filters handleFilter={handleFilter} className="" filters={params} />
        </aside>
        <div className={localStyles.containerRadios}>
          {optionsRent.map((option) => (
            <label
              className={`${localStyles.customLabels} ${
                params.operation === option.value ? localStyles.selectLabel : ''
              }`}
              key={option.id}
              htmlFor={option.value}
            >
              <input
                className={localStyles.customInputRadio}
                id={option.value}
                type="radio"
                value={option.value}
                checked={params.operation === option.value}
                onChange={handleSelectOperation}
              />
              {option.text}
            </label>
          ))}
        </div>
        {resultRequest?.elementList.length ? (
          <div className={localStyles.listContent}>
            <ListFloor
              className={localStyles.listPlaces}
              Floors={resultRequest.elementList}
            />
            <Pagination
              className={localStyles.paginatorContainer}
              page={params.numPage}
              color="primary"
              variant="outlined"
              shape="rounded"
              onChange={onchangePage}
              count={resultRequest.totalPages}
            />
          </div>
        ) : (
          <div className={localStyles.listContent}>
            <EmptyList placeName={params.locationName} />
          </div>
        )}
      </div>
    </LayoutList>
  );
};

export default List;
