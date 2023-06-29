import React from 'react';
import localStyles from '@/components/notFound/notFound.module.scss';
import SimpleNavbar from '@/components/common/simpleNavbar/SimpleNavbar';
import Footer from '@/components/common/footer/Footer';
import Alert from '@mui/material/Alert';
import WarningIcon from '@mui/icons-material/Warning';
import Link from 'next/link';
const NofFoundPage = () => {
  return (
    <>
      <div className={localStyles.headerContent}>
        <SimpleNavbar className={localStyles.transformHeader} />
      </div>
      <main className={localStyles.container}>
        <section className={localStyles.alert}>
          <WarningIcon />{' '}
          <span>
            {' '}
            Lo sentimos, la dirección que has introducido en tu navegador no
            corresponde a ninguna página de idealista.
          </span>
        </section>
        <div className={localStyles.body}>
          <span>Esto puede haber ocurrido porque:</span>
          <li>Te has confundido al escribir el teléfono o el código de anuncio. No te preocupes, pasa a menudo ;-)</li>
          <li>Has llegado desde un enlace antiguo que hoy no corresponde a ningún anuncio.</li>
          <Link className={localStyles.link} href="/">
          Prueba a buscar lo que quieres desde la página de inicio
        </Link>
        </div>
      </main>
      <Footer className={localStyles.footerContainer} />
    </>
  );
};

export default NofFoundPage;
