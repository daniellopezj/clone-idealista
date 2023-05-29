import * as React from 'react';
import '@/globals.scss';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Theme from '@/plugins/material/Theme';
import CreateEmotionCache from '@/plugins/material/CreateEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = CreateEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={Theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

// import '@fortawesome/fontawesome-svg-core/styles.css';
// import type { AppProps } from 'next/app';
// import { config } from '@fortawesome/fontawesome-svg-core';
// config.autoAddCss = false;

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
