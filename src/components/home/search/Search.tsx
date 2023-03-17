import React, {useState} from 'react'
import localStyles from '@/components/home/search/Search.module.css'
const Search = () => {

  const optionsRent =[
    {
      id:1,
      value:'rent',
      text:'Alquilar'
    },
    {
      id:0,
      value:'sale',
      text:'Comprar'
    },
  ]


  const [query, setQuery] = useState("");
  const [selectTypeService, setSelectTypeService] = useState("rent");

  const handleSelectType = (event: any) => {
    setSelectTypeService(event.target.value);
  };
  const handleQueryChange = (event: any) => {
    console.log(event)
    setQuery(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(query)
  };

  return (
    <div className={localStyles.mainContainerSearch}>
      <div className={localStyles.contentSearch}>
        <div className={localStyles.title}>
          <h2>¿Realmente compras algo para toda la vida?</h2>
        </div>
        <div className={localStyles.searchContainerLine}>
          <div className={localStyles.containerRadios}>
          {optionsRent.map((option)=>(
            <label className={`${localStyles.customLabels} ${selectTypeService=== option.value?localStyles.selectLabel:''}`} key={option.id} htmlFor={option.value}>
              <input
                className={localStyles.customInputRadio}
                id={option.value}
                type="radio"
                value={option.value}
                checked={selectTypeService ===  option.value}  
                onChange={handleSelectType}
              />
              {option.text}
            </label>
          ))}
          </div>
          <input 
          className={localStyles.customInputSearch}
          type="text" 
          placeholder='Escribe dónde buscas'
          value={query} onChange={handleQueryChange} />
          <button className={localStyles.customButton} onClick={handleButtonClick}>Buscar</button>
        </div>
      </div>
    </div>
  )
}

export default Search