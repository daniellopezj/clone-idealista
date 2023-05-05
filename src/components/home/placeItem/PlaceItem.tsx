import React from 'react'
import localStyles from '@/components/home/placeItem/PlaceItem.module.css';

const PlaceItem = (place:any) => {
  return (
    <div className={localStyles.container}>
      {place.name}
      <div>{place.subTypeText}</div>
    </div>
  )
}

export default PlaceItem