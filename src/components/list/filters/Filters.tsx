import React, { useState } from 'react';
import BaseSelect from '@/components/common/base/select/BaseSelect';
import localStyles from '@/components/list/filters/Filters.module.scss';

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
      <BaseSelect
        value={selectedOption}
        onChange={handleOptionChange}
        options={options}
      />
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default Filters;
