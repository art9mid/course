import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import theme from 'theme';
import FAQ from 'sections/faq';
import SEO from 'components/seo';
import Modal from 'components/modal';
import Banner from 'sections/banner';
import CtaOne from 'sections/cta-one';
import CtaTwo from 'sections/cta-two';
import Layout from 'components/layout';
import Pricing from 'sections/pricing';
import WorkFlow from 'sections/workflow';
import CtaThree from 'sections/cta-three';
import PopularCourse from 'sections/popular-course';
import { StickyProvider } from 'contexts/app/app.provider';
import { VideoProvider } from 'contexts/video/video.provider';

export default function IndexPage() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <VideoProvider>
          <Layout>
            <SEO
              description="description"
              title={t('title')}
            />
            <Banner />
            {/*<FavoriteCourse />*/}
            <CtaThree />
            <PopularCourse />
            <WorkFlow />
            <Pricing />
            <CtaTwo />
            <FAQ />
            <CtaOne />
            <Modal />
          </Layout>
        </VideoProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}
