import React from 'react';
import { TranslatedTexts } from '@/types/Places.types';
import localStyle from '@/components/details/price/Price.module.scss';

interface PriceProps {
  features: TranslatedTexts;
  className: string;
}

const Price = ({ features, className }: PriceProps) => {
  const keysToUse = ['costs'];

  const addText = (detail: string) => {
    if (detail.includes('€/m²')) {
      return 'Precio del inmueble:';
    }
    if (detail.includes('€/mes')) {
      return 'Precio por m²:';
    }
    return '';
  };
  return (
    <section className={`${className} ${localStyle.priceContainer}`}>
      {features.characteristicsDescriptions.map(
        (feature) =>
          keysToUse.includes(feature.key) && (
            <div key={feature.key}>
              <span className={localStyle.priceTitle}> {feature.title}</span>
              <ul>
                {feature.detailFeatures.map((detail) => (
                  <li key={detail.phrase} className={localStyle.priceItem}>
                    {addText(detail.phrase) && (
                      <span>{addText(detail.phrase)} </span>
                    )}
                    <span>{detail.phrase} </span>
                  </li>
                ))}
              </ul>
            </div>
          ),
      )}
    </section>
  );
};

export default Price;
