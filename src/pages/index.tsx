import Head from 'next/head';

import LayoutDefault from '@/layout/LayoutDefault';
import MainView from '@/components/home/mainView/MainView';
import BodyHome from '@/components/home/bodyHome/BodyHome';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clone Idealista — Casas y pisos, alquiler y venta</title>
        <meta
          name="description"
          content="Clone idealista desarrollado con Next js y react js. Sistema para la comercialización de viviendas en toda España. "
        />
        <meta name="author" content="Dani Lopez | danidev" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="language" content="es"></meta>
        <meta
          name="keywords"
          content="fullStack, desarrollador freelance,HTML/CSS, JavaScript, TypeScript, angular, vue, react,Node js,, freelance, frontend, front-end, Desarrollador frontend, programador, Desarrollo web, Responsive web design, UI/UX"
        />

        <meta name="type" content="website" />
        <meta name="site_name" content="clone-idealista.vercel.app" />
        <meta
          property="og:title"
          content="Clone Idealista — Casas y pisos, alquiler y venta"
        />
        <meta
          property="og:description"
          content="Clone idealista desarrollado con Next js y react js. Sistema para la comercialización de viviendas en toda España. "
        />
        <meta
          property="og:image"
          content="https://clone-idealista.vercel.app/mainView.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://clone-idealista.vercel.app" />
        <meta
          property="twitter:title"
          content="Clone Idealista — Casas y pisos, alquiler y venta"
        />
        <meta
          property="twitter:description"
          content="Clone idealista desarrollado con Next js y react js. Sistema para la comercialización de viviendas en toda España. "
        />
        <meta
          property="twitter:image"
          content="https://clone-idealista.vercel.app/mainView.webp"
        />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="600" />
        <meta property="twitter:type" content="website" />

        <meta
          property="twitter:url"
          content="https://clone-idealista.vercel.app"
        />
        <link rel="canonical" href="https://clone-idealista.vercel.app" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://clone-idealista.vercel.app/favicon.ico"
        ></link>
        <meta
          name="google-site-verification"
          content="EDATE5zGO6j3niGnrTtyYqJuKcg5Ch0pL1SYrpijehA"
        />
      </Head>
      <LayoutDefault>
        <MainView />
        <BodyHome />
      </LayoutDefault>
    </>
  );
}
