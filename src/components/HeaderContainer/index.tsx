import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Social } from 'typings';
import Header from '../Menu/Header';

type Props = {
  children?: ReactNode;
  socials: Social[];
};

const HeaderContainer = ({ children, socials }: Props) => {
  return (
    <>
      <Head>
        <title>Marcos Portfolio</title>
      </Head>
      <Header socials={socials} />
      {children}
    </>
  );
};

export default HeaderContainer;
