import { TranslatedTexts } from '@/types/Places.types';
import React from 'react';
import localStyle from '@/components/details/features/Features.module.scss';

interface FeaturesProps {
  features: TranslatedTexts;
  className: string;
}

const Features = ({ features, className }: FeaturesProps) => {
  const keysToIgnore = ['costs', 'stats'];
  return (
    <div className={`${className} ${localStyle.featureContainer}`}>
      {features.characteristicsDescriptions.map(
        (feature) =>
          !keysToIgnore.includes(feature.key) && (
            <div key={feature.key}>
              <span className={localStyle.featureTitle}> {feature.title}</span>
              <ul>
                {feature.detailFeatures.map((detail) => (
                  <li key={detail.phrase} className={localStyle.featureItem}>
                    {detail.phrase}
                  </li>
                ))}
              </ul>
            </div>
          ),
      )}
    </div>
  );
};

export default Features;
