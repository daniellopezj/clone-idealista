import React from 'react'
import CardHome from '@/components/home/cardHome/CardHome'
import { cardsHome } from '@/services/data.mocks'

const BodyHome = () => {
  return (
    <div >
      {cardsHome.map((item)=>(
        <CardHome key={item.id}  {...item}/>
      ))}
    </div>
  )
}

export default BodyHome