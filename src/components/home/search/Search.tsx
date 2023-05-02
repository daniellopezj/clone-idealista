import React, { useEffect, useState } from 'react';
import localStyles from '@/components/home/search/Search.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SearchResult {
  name: string;
  locationId: string;
  divisible: boolean;
  type: string;
  suggestedLocationId: string;
  subTypeText: string;
}

const Search = () => {
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

  const [query, setQuery] = useState('');
  const [selectTypeService, setSelectTypeService] = useState('rent');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showList, setShowList] = useState<boolean>(false);

  const handleSelectType = (event: any) => {
    setSelectTypeService(event.target.value);
  };
  const handleQueryChange = async (event: any) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      console.log(query);
      try {
        const res = await fetch(
          `https://idealista2.p.rapidapi.com/auto-complete?prefix=${query}&country=es`,
          {
            headers: {
              'X-RapidAPI-Key':
                '4e66ee2754msh37d0a809cfca29dp18dfa2jsnd7927de5ae36',
              'X-RapidAPI-Host': 'idealista2.p.rapidapi.com',
            },
          },
        );

        const results = await res.json();

        setSearchResults(results.locations);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  const handleButtonClick = () => {
    console.log(query);
  };

  return (
    <div className={localStyles.mainContainerSearch}>
      <div className={localStyles.contentSearch}>
        <div className={localStyles.title}>
          <h2>¿Realmente compras algo para toda la vida?</h2>
        </div>
        <div className={localStyles.searchContainerLine}>
          <div className={localStyles.containerRadios}>
            {optionsRent.map((option) => (
              <label
                className={`${localStyles.customLabels} ${
                  selectTypeService === option.value
                    ? localStyles.selectLabel
                    : ''
                }`}
                key={option.id}
                htmlFor={option.value}
              >
                <input
                  className={localStyles.customInputRadio}
                  id={option.value}
                  type="radio"
                  value={option.value}
                  checked={selectTypeService === option.value}
                  onChange={handleSelectType}
                />
                {option.text}
              </label>
            ))}
          </div>
          <div className={localStyles.containerInputSearch}>
            <input
              className={localStyles.customInputSearch}
              type="text"
              placeholder="Escribe dónde buscas"
              value={query}
              onChange={handleQueryChange}
              onFocus={() => setShowList(true)}
              onBlur={() => setTimeout(() => setShowList(false), 200)}
            />
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            {showList ? (
              <div className={localStyles.containerList}>
                {searchResults.length > 0 && (
                  <ul className="search-component-results">
                    {searchResults.map((result) => (
                      <li key={result.locationId}>{JSON.stringify(result)} </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              ''
            )}
          </div>
          <button
            className={localStyles.customButton}
            onClick={handleButtonClick}
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
