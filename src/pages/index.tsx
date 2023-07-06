import Head from 'next/head';

import LayoutDefault from '@/layout/LayoutDefault';
import MainView from '@/components/home/mainView/MainView';
import BodyHome from '@/components/home/bodyHome/BodyHome';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Clone Idealista — Casas y pisos, alquiler y venta. Anuncios gratis
        </title>
        <meta
          name="description"
          content="Clone idealista desarrollado con Next js y react js. Sistema para la comercialización de viviendas en toda España. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://clone-idealista.vercel.app/mainView.webp"
        />
        <meta
          name="keywords"
          content="fullStack, desarrollador freelance,HTML/CSS, JavaScript, TypeScript, angular, vue, react,Node js,, freelance, frontend, front-end, Desarrollador frontend, programador, Desarrollo web, Responsive web design, UI/UX"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta name="og:url" content="https://clone-idealista.vercel.app" />
      </Head>
      <LayoutDefault>
        <MainView />
        <BodyHome />
      </LayoutDefault>
    </>
  );
}
