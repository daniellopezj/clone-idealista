import React, {useState} from 'react'
import localStyles from '@/components/home/search/Search.module.css'
const Search = () => {

  const optionsRent =[
    {
      id:0,
      value:'sale',
      text:'vender'
    },
    {
      id:0,
      value:'rent',
      text:'Alquilar'
    }
  ]


  const [query, setQuery] = useState("");
  const [selectTypeService, setSelectTypeService] = useState("");

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
      <div className={localStyles.title}>
        <h2>¿Realmente compras algo para toda la vida?</h2>
      </div>
      <div className={localStyles.searchContainerLine}>
        <div>
         {optionsRent.map((option)=>(
          <label key={option.id} htmlFor={option.value}>
            <input
              className={localStyles.customInput}
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
        <input type="text" value={query} onChange={handleQueryChange} />
        <button onClick={handleButtonClick}>Go</button>
      </div>
      <h1>{query}</h1>
    </div>
  )
}

export default Search