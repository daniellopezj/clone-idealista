import React from 'react'
import localStyles from '@/components/home/cardHome/CardHome.module.css'
import Image from 'next/image'
import Link from 'next/link'


const CardHome = () => {
  return (
    <article className={localStyles.containerCard}>
    <picture className={localStyles.containerPicture}>
     <Image
      className={localStyles.customImage}
      src="/rent.jpg"
      alt="Picture of the author"
      width={600}
      height={380}
      />
      </picture>    
    <div className={localStyles.cardMessage}>
      <h3 className={localStyles.cardTitle}>
        Casas rurales en España, Italia y Portugal para resguardarse del frio
      </h3>
      <p className={localStyles.cardParagrah}>Todos queremos vacaciones y desconectar del día a día, ya sea en la playa, montaña o ciudad. ¿Te vas a resistir a una escapada rural? Chimenea, barbacoa, jardín, piscina… tú eliges.</p>
      <Link className={localStyles.cardLink} href="/">Ver alquiler vacacional para invierno</Link>
    </div>

    </article>
  )
}

export default CardHome