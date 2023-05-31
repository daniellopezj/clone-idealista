import React, { useEffect, useMemo, useState } from 'react';
import LayoutList from '@/layout/LayoutList';
import Filters from '@/components/list/filters/Filters';
import ListFloor from '@/components/list/listFloor/ListFloor';
import localStyles from '@/components/list/List.module.scss';
import { useRouter } from 'next/router';
import { FiltersPlaces, ResponseListFloor } from '@/types/Places.types';
import Pagination from '@mui/material/Pagination';

const List = () => {
  const router = useRouter();
  const { locationId, locationName } = router.query;
  const [page, setPage] = React.useState(1);
  const [resultRequest, setResultRequest] = useState<ResponseListFloor | null>({
    elementList: [
      {
        propertyCode: '14823576',
        thumbnail:
          'https://img3.idealista.it/blur/WEB_LISTING-M/0/id.pro.it.image.master/67/fe/3c/161713804.jpg',
        numPhotos: 7,
        floor: 'ss',
        price: 600,
        propertyType: 'studio',
        operation: 'rent',
        size: 40,
        exterior: false,
        rooms: 1,
        bathrooms: 1,
        address: 'Via Appia Antica, Roma, RM',
        province: 'Roma',
        municipality: 'Roma',
        district: 'Appio Latino',
        country: 'it',
        neighborhood: 'Caffarella',
        locationId: '0-EU-IT-RM-01-001-097-09-003',
        latitude: 41.8545834,
        longitude: 12.5180892,
        showAddress: false,
        contactInfo: {
          phone1: {
            phoneNumber: '0685871005',
            formattedPhone: '0685871005',
            prefix: '39',
            phoneNumberForMobileDialing: '+390685871005',
            nationalNumber: true,
          },
          contactName: "L'AFFITTAFACILE",
          userType: 'professional',
          contactMethod: 'all',
        },
        url: 'https://www.idealista.it/immobile/14823578/',
        description:
          "In the immediate vicinity of the Appia Antica Park in Via dell'Appia Antica, inside a private villa with garden we offer the rental of a flat in a basement and internally composed of a living room with kitchenette, a bedroom with wall-mounted air conditioner, bathroom and parking space, the apartment is renovated and is delivered without furniture. Contract 3 + 2, with dry coupon. To view the property the appointments will be fixed from 01/09/2018.",
        hasVideo: false,
        status: 'good',
        newDevelopment: false,
        favourite: false,
        newProperty: false,
        suggestedTexts: { title: 'prueba' },
        multimedia: {
          images: [
            {
              url: 'https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/33/a4/e1/1048883031.jpg',
            },
            {
              url: 'https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/78/80/e1/1126280881.jpg',
            },
            {
              url: 'https://img3.idealista.com/blur/WEB_LISTING-M/90/id.pro.es.image.master/a7/6d/79/1053351520.jpg',
            },
          ],
        },
        hasLift: true,
        priceByArea: 15,
        hasPlan: false,
        has3DTour: false,
        has360: false,
        hasStaging: false,
        topNewDevelopment: false,
        topHighlight: false,
        urgentVisualHighlight: false,
        visualHighlight: false,
        preferenceHighlight: false,
      },
      {
        propertyCode: '14823578',
        thumbnail:
          'https://img3.idealista.com/blur/WEB_LISTING-M/90/id.pro.es.image.master/a7/6d/79/1053351520.jpg',
        numPhotos: 7,
        floor: 'ss',
        price: 600,
        propertyType: 'studio',
        operation: 'rent',
        size: 40,
        exterior: false,
        rooms: 1,
        bathrooms: 1,
        address: 'Via Appia Antica, Roma, RM',
        province: 'Roma',
        municipality: 'Roma',
        district: 'Appio Latino',
        country: 'it',
        neighborhood: 'Caffarella',
        locationId: '0-EU-IT-RM-01-001-097-09-003',
        latitude: 41.8545834,
        longitude: 12.5180892,
        showAddress: false,
        url: 'https://www.idealista.it/immobile/14823578/',
        suggestedTexts: {
          title: '        Piso en calle Gutiérrez Solana, El Viso, Madrid',
        },
        contactInfo: {
          phone1: {
            phoneNumber: '0685871005',
            formattedPhone: '0685871005',
            prefix: '39',
            phoneNumberForMobileDialing: '+390685871005',
            nationalNumber: true,
          },
          contactName: "L'AFFITTAFACILE",
          userType: 'professional',

          contactMethod: 'all',
        },
        description:
          "In the immediate vicinity of the Appia Antica Park in Via dell'Appia Antica, inside a private villa with garden we offer the rental of a flat in a basement and internally composed of a living room with kitchenette, a bedroom with wall-mounted air conditioner, bathroom and parking space, the apartment is renovated and is delivered without furniture. Contract 3 + 2, with dry coupon. To view the property the appointments will be fixed from 01/09/2018.",
        hasVideo: false,
        status: 'good',
        newDevelopment: false,
        favourite: false,
        newProperty: false,
        multimedia: {
          images: [
            {
              url: 'https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/78/80/e1/1126280881.jpg',
            },
            {
              url: 'https://img3.idealista.com/blur/WEB_LISTING-M/90/id.pro.es.image.master/a7/6d/79/1053351520.jpg',
            },
            {
              url: 'https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/33/a4/e1/1048883031.jpg',
            },
          ],
        },
        hasLift: true,
        priceByArea: 15,
        hasPlan: false,
        has3DTour: false,
        has360: false,
        hasStaging: false,
        topNewDevelopment: false,
        topHighlight: false,
        urgentVisualHighlight: false,
        visualHighlight: false,
        preferenceHighlight: false,
      },
      {
        propertyCode: '14823579',
        thumbnail:
          'https://img3.idealista.com/blur/WEB_LISTING-M/90/id.pro.es.image.master/a7/6d/79/1053351520.jpg',
        numPhotos: 7,
        floor: 'ss',
        price: 600,
        propertyType: 'studio',
        operation: 'rent',
        size: 40,
        exterior: false,
        rooms: 1,
        bathrooms: 1,
        address: 'Via Appia Antica, Roma, RM',
        province: 'Roma',
        municipality: 'Roma',
        district: 'Appio Latino',
        country: 'it',
        neighborhood: 'Caffarella',
        suggestedTexts: {
          title:
            '        Piso en calle Gutiérrez Solana, El Viso, Madrid  Piso en calle Gutiérrez Solana, El Viso, Madrid',
        },
        locationId: '0-EU-IT-RM-01-001-097-09-003',
        latitude: 41.8545834,
        longitude: 12.5180892,
        showAddress: false,
        url: 'https://www.idealista.it/immobile/14823578/',
        description:
          "In the immediate vicinity of the Appia Antica Park in Via dell'Appia Antica, inside a private villa with garden we offer the rental of a flat in a basement and internally composed of a living room with kitchenette, a bedroom with wall-mounted air conditioner, bathroom and parking space, the apartment is renovated and is delivered without furniture. Contract 3 + 2, with dry coupon. To view the property the appointments will be fixed from 01/09/2018.",
        hasVideo: false,
        status: 'good',
        contactInfo: {
          phone1: {
            phoneNumber: '0685871005',
            formattedPhone: '0685871005',
            prefix: '39',
            phoneNumberForMobileDialing: '+390685871005',
            nationalNumber: true,
          },
          contactName: "L'AFFITTAFACILE",
          userType: 'professional',
          agencyLogo:
            'https://st3.idealista.it/8f/af/32/laffittafacile-roma.gif',
          contactMethod: 'all',
        },
        newDevelopment: false,
        favourite: false,
        newProperty: false,
        multimedia: {
          images: [
            {
              url: 'https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/78/80/e1/1126280881.jpg',
            },
            {
              url: 'https://img3.idealista.com/blur/WEB_LISTING-M/90/id.pro.es.image.master/a7/6d/79/1053351520.jpg',
            },
            {
              url: 'https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/33/a4/e1/1048883031.jpg',
            },
          ],
        },
        hasLift: true,
        priceByArea: 15,
        hasPlan: false,
        has3DTour: false,
        has360: false,
        hasStaging: false,
        topNewDevelopment: false,
        topHighlight: false,
        urgentVisualHighlight: false,
        visualHighlight: false,
        preferenceHighlight: false,
      },
    ],
    total: 56,
    totalPages: 2,
    actualPage: 1,
    itemsPerPage: 40,
    numPaginations: 0,
    hiddenResults: false,

    alertName: 'Homes in subdistrict Caffarella, Roma',
    lowerRangePosition: 0,
    upperRangePosition: 40,
    paginable: true,
  } as ResponseListFloor);
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

  const onchangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
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
            <Filters className="" />
            <div>
              <ListFloor
                className={localStyles.listPlaces}
                Floors={resultRequest.elementList}
              />
              <Pagination
                className={localStyles.paginatorContainer}
                page={page}
                color="primary"
                variant="outlined"
                shape="rounded"
                onChange={onchangePage}
                count={10}
              />
            </div>
          </div>
        )}
      </div>
    </LayoutList>
  );
};

export default List;
