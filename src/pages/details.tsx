import React, { useState } from 'react';
import LayoutDetails from '@/layout/LayoutDetails';
import localStyle from '@/components/details/Details.module.scss';
import { DetailsFloor } from '@/types/Places.types';
import Floor from '@/components/details/floor/Floor';
import Contact from '@/components/details/contact/Contact';
const Details = () => {
  const [floor] = useState<DetailsFloor>({
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
    propertyComment:
      'SOLO ESTUDIANTES o FUNCIONARIOS. Abstenerse quien no cumpla los requisitos. Se alquila estudio amueblado, tamaño de una habitación, céntrico, en el barrio de Arganzuela. Tranquilo y luminoso, con ascensor y 2 ventanas. Al lado del metro de Palos de Moguer y estación de Renfe y metro de Delicias y Atocha (renfe y metro). Cerca del Madrid central y de zonas de ocio, cultura y deportes a un paso. Todos los servicios. Comunidad y Calefacción 24 h incluida. Ascensores. Perfectamente comunicado con todas las lineas de Renfe, Metro y bus. Se pide nómina o aval no inferior a 1800€. No fumadores. No mascotas. 2 meses de fianza. Escribir, por favor, sólo quien cumpla requisitos indicando fecha de entrada, número de personas, edad, domicilio y ocupación actual',
    suggestedTexts: {
      title: 'Estudio en calle de Canarias, 38',
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
      agencyLogo: 'https://st3.idealista.it/8f/af/32/laffittafacile-roma.gif',
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
    ubication: {
      title: 'Calle de Canarias, 38',
      latitude: 40.4017593,
      longitude: -3.6925296,
      hasHiddenAddress: false,
      administrativeAreaLevel4: 'Palos de Moguer',
      administrativeAreaLevel3: 'Arganzuela',
      administrativeAreaLevel2: 'Madrid',
      administrativeAreaLevel1: 'Madrid',
      locationId: '0-EU-ES-28-07-001-079-02-006',
      locationName: 'Palos de Moguer, Madrid',
    },
    translatedTexts: {
      floorNumberDescription: 'Planta 5ª',
      layoutDescription: 'Planta 5ª interior con ascensor',
      characteristicsDescriptions: [
        {
          key: 'features',
          title: 'Características básicas',
          detailFeatures: [
            {
              phrase: '18 m² construidos, 17 m² útiles',
            },
            {
              phrase: '1 baños',
            },
            {
              phrase: 'Segunda mano/buen estado',
            },
          ],
        },
        {
          key: 'layout',
          title: 'Edificio',
          detailFeatures: [
            {
              phrase: 'Planta 5ª interior',
            },
            {
              phrase: 'Con ascensor',
            },
          ],
        },
        {
          key: 'costs',
          title: 'Precio',
          detailFeatures: [
            {
              phrase: '460 €/mes',
            },
            {
              phrase: '25,56 €/m²',
            },
            {
              phrase: 'Fianza de 2 meses',
            },
          ],
        },
        {
          key: 'stats',
          title: 'Actualizado el 6 de junio',
          detailFeatures: [
            {
              phrase: '56.888 visita',
            },
            {
              phrase: '14 envío a amigos',
            },
            {
              phrase: '1.389 veces guardado como favorito',
            },
          ],
        },
      ],
    },
    moreCharacteristics: {
      modificationDate: 1686134660000,
      roomNumber: 2,
      bathNumber: 1,
      isAuction: false,
      housingFurnitures: 'unknown',
      constructedArea: 70,
      usableArea: 65,
      energyCertificationType: 'inProcess',
      flatLocation: 'external',
      status: 'good',
    },
    modificationDate: {
      value: 1686006618000,
      text: 'Anuncio actualizado hace un día',
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
  } as DetailsFloor);
  return (
    <>
      <LayoutDetails>
        <main className={localStyle.mainContainer}>
          <Floor floor={floor} className={localStyle.containerFloor} />
          <div className={localStyle.containerContact}>
            <Contact className="" />
          </div>
        </main>
      </LayoutDetails>
    </>
  );
};

export default Details;
