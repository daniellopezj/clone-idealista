import React, { useEffect, useState } from 'react';
import localStyles from '@/components/home/search/Search.module.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlaceItem from '../placeItem/PlaceItem';
import { SearchResult } from '@/types/Places.types';
import { backend } from '@/api/backend';
import { useRouter } from 'next/router';

const Search = () => {
  const { apiSearch } = backend();
  const router = useRouter();

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
  const [loading, setLoading] = useState(false);
  const [selectTypeService, setSelectTypeService] = useState('rent');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showList, setShowList] = useState<boolean>(false);
  const [inputError, setInputError] = useState<boolean>(false);
  const [placeSelected, setPlaceSelected] = useState<SearchResult | null>(null);

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
      if (query.length > 2 && query.length < 9) {
        let res = await apiSearch(query);
        res = res.filter((place) => place.locationId);
        setSearchResults(res);
      }
    };
    getData();
  }, [query]);

  const search = () => {
    setLoading(true);
    if (!placeSelected) {
      setInputError(true);
      return;
    }
    setQuery(placeSelected.name);
    const queryParams = {
      locationId: placeSelected.locationId,
      locationName: placeSelected.name,
      operation: selectTypeService,
    };
    router.push({
      pathname: '/list',
      query: queryParams,
    });
  };

  useEffect(() => {
    if (placeSelected) {
      search();
    }
  }, [placeSelected]);

  return (
    <div className={localStyles.mainContainerSearch}>
      <div className={localStyles.contentSearch}>
        <div className={localStyles.containerTitle}>
          <h2 className={localStyles.title}>
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
            <FontAwesomeIcon
              className={localStyles.iconSearch}
              icon={faSearch}
            ></FontAwesomeIcon>
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
          <button
            disabled={loading}
            className={localStyles.customButton}
            onClick={() => search()}
          >
            {loading ? 'Buscando' : 'Buscar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
