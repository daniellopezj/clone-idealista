import React, { useState } from 'react';
import LayoutDetails from '@/layout/LayoutDetails';
import localStyle from '@/components/details/Details.module.scss';
import { DetailsFloor } from '@/types/Places.types';
import Floor from '@/components/details/floor/Floor';
const details = () => {
  const [floor, setFloor] = useState<DetailsFloor>({
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
          <Floor floor={floor} className='' />
        </main>
      </LayoutDetails>
    </>
  );
};

export default details;
