import React from 'react';
import localStyle from '@/components/list/emptyList/EmptyList.module.scss';
import Image from 'next/image';

interface EmptyListProps {
  placeName: string;
}

const EmptyList = ({ placeName }: EmptyListProps) => {
  return (
    <main className={localStyle.container}>
      <picture className={localStyle.containerPicture}>
        <Image
          className={localStyle.customImage}
          src="/alfombra.svg"
          alt="Picture of the author"
          width={400}
          height={600}
        />
      </picture>
      <div className={localStyle.body}>
        <span className={localStyle.emptyTitle}>
          Hemos mirado por todas partes pero... no hemos encontrado lo que
          buscas :(
        </span>
        <span className={localStyle.listTitle}>Puedes probar:</span>
        <li>Ver todos los inmuebles en {placeName}</li>
        <li>Buscando otro lugar</li>
        <li>O prueba a ampliar tu búsqueda modificando algún filtro</li>
      </div>
    </main>
  );
};

export default EmptyList;
