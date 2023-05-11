import React, { useEffect, useState } from 'react';
import localStyles from '@/components/home/search/Search.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlaceItem from '../placeItem/PlaceItem';

interface SearchResult {
  name: string;
  locationId: string;
  divisible: boolean;
  type: string;
  suggestedLocationId: string;
  subTypeText: string;
}
interface responsePlaces {
  total: number;
  locations: SearchResult[];
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
  const [inputError, setInputError] = useState<boolean>(false);
  const [placeSelected, setPlaceSelected] = useState<SearchResult | null>(null);
  let abortController = new AbortController();

  const handleSelectType = (event: any) => {
    setSelectTypeService(event.target.value);
  };
  const handleQueryChange = async (event: any) => {
    setQuery(event.target.value);
    if (!event.target.value) {
      setPlaceSelected(null);
      setSearchResults([]);
    }
    setInputError(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        if (query.length > 1) {
          abortController.abort();
          abortController = new AbortController();
          const res = await fetch(
            `https://idealista2.p.rapidapi.com/auto-complete?prefix=${query}&country=es`,
            {
              signal: abortController.signal,
              headers: {
                'X-RapidAPI-Key':
                  'b92e6ba8e6mshc10c2bd9fb133a8p1ad5e8jsnded8e7917a1a',
                'X-RapidAPI-Host': 'idealista2.p.rapidapi.com',
              },
            },
          );
          if (res.status < 400) {
            const results: responsePlaces = await res.json();
            setSearchResults(results.locations);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  const search = () => {
    if (!placeSelected) {
      setInputError(true);
      return;
    }
    setQuery(placeSelected.name);
  };

  useEffect(() => {
    if (placeSelected) {
      search();
    }
  }, [placeSelected]);

  return (
    <div className={localStyles.mainContainerSearch}>
      <div className={localStyles.contentSearch}>
        <div className={localStyles.title}>
          <h2 className="text-2xl font-bold">
            ¿Realmente compras algo para toda la vida?
          </h2>
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
              className={`${localStyles.customInputSearch} ${
                inputError ? localStyles.inputError : ''
              }`}
              type="text"
              placeholder="Escribe dónde buscas"
              value={query}
              onChange={handleQueryChange}
              onFocus={() => setShowList(true)}
              onBlur={() => setTimeout(() => setShowList(false), 200)}
            />
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            {inputError && (
              <span className={localStyles.inputErrorMessage}>
                Escribe una ubicación donde buscar
              </span>
            )}
            {showList && searchResults.length > 0 && (
              <ul className={localStyles.containerList}>
                {searchResults.map((result) => (
                  <PlaceItem
                    key={result.suggestedLocationId}
                    handleClick={() => setPlaceSelected(result)}
                    place={result}
                
                  />
                ))}
              </ul>
            )}
          </div>
          <button className={localStyles.customButton} onClick={() => search()}>
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
