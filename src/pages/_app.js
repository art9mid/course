import React from 'react';
import Router from 'next/router';
import 'typeface-dm-sans';
import { initGA, logPageView } from 'analytics';
import { appWithTranslation } from 'next-i18next';
import 'rc-drawer/assets/index.css';
import 'swiper/swiper-bundle.min.css';
import 'react-modal-video/css/modal-video.min.css';

function CustomApp({ Component, pageProps }) {
  React.useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);
  return <Component {...pageProps} />;
}

export default appWithTranslation(CustomApp);
