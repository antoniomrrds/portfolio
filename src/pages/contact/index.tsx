import { fetchPageInfo } from '@/utils/fetches/fetchPageInfo';
import { fetchSocials } from '@/utils/fetches/fetchSocials';
import { GetStaticProps } from 'next';
import React from 'react';

//types
import { PageInfo, Social } from 'typings';
// page
import ContactPage from '@/containers/ContactPage';

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
};

const Contact = ({ pageInfo, socials }: Props) => {
  return <ContactPage pageInfo={pageInfo} socials={socials} />;
};

export default Contact;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      socials,
    },
    revalidate: 10,
  };
};
