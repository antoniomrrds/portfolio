import ContactMe from '@/components/Contact/ContactMe';
import Footer from '@/components/Footer';
import HeaderContainer from '@/components/HeaderContainer';
import React from 'react';
import { PageInfo, Social } from 'typings';

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

const ContactPage = ({ socials, pageInfo }: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-midnight-blue">
      <HeaderContainer socials={socials} />

      <div className="flex-grow flex justify-center items-center">
        <ContactMe />
      </div>

      <Footer socials={socials} classNameText={''} pageInfo={pageInfo} />
    </div>
  );
};

export default ContactPage;
