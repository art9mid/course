/** @jsx jsx */
import { jsx, Container, Flex, Button, Box } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { IoIosUnlock } from 'react-icons/io';
import { NavLink, Link } from 'components/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Logo from 'components/logo';

import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import MobileDrawer from './mobileDrawer';
import menuItems from './header.data';
import React from 'react';
import { useRouter } from 'next/router';

export default function Header({ className }) {
  const router = useRouter();
  const langs = [{ value: 'ru', label: 'ru' }, { value: 'en', label: 'en' }, { value: 'ua', label: 'ua' }];

  const handleSelect = (lang) => {
    router.push(router.asPath, router.asPath, { locale: lang });
  };

  const renderLanguages = (item, index) => {
    return (
      <span
        style={{ padding: 10, cursor: 'pointer' }}
        onClick={() => handleSelect(item.value)}
        key={index}
      >
        {item.label}
      </span>
    );
  };

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"
                sx={styles.nav.navLink}
                to={path}
                spy
                smooth
                offset={-100}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
          </Flex>

          <Link
            path="/"
            ml={2}
            label="Try for Free"
            sx={styles.headerBtn}
            variant="buttons.primary"
          />
          {langs.map(renderLanguages)}
          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    fontSize: '16px',
    fontWeight: 700,
    backgroundColor: '#FCF2E8',
    display: ['none', null, null, null, 'inline-block'],
  },
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    py: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    '&.sticky': {
      backgroundColor: 'background',
      color: 'text',
      py: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1430px',
    '@media(max-width:1440px)': {
      maxWidth: '1230px',
    },
    '@media screen and (max-width: 991px)': {
      justifyContent: 'space-between',
    },
  },
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 991px)': {
      display: 'none',
    },
    navLink: {
      fontSize: '16px',
      color: '#02073E',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0',
      },
      '&:hover, &.active': {
        color: 'primary',
      },
    },
  },
};
