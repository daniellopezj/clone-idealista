import React, {useState} from 'react'
import localStyles from '@/components/home/search/Search.module.css'
const Search = () => {

  const [query, setQuery] = useState("");

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
      <div>
        <input type="text" value={query} onChange={handleQueryChange} />
        <button onClick={handleButtonClick}>Go</button>
      </div>
      <h1>{query}</h1>
     </div>
    </div>
  )
}

export default Search