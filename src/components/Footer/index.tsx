import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PageInfo, Social } from 'typings';
import Link from 'next/link';

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
  classNameText:string;
};

const Footer = ({ socials, pageInfo,classNameText }: Props) => {
  const [developer, setDeveloper] = useState('');

  useEffect(() => {
    const filteredSocials = socials.filter((social) =>
      social.title.includes('Instagram'),
    );
    if (filteredSocials.length > 0) setDeveloper(filteredSocials[0].url);
  }, [socials]);

  return (
    <div className={`bg-midnight-blue ${classNameText} bottom-0 text-center box-border relative  h-auto border-t-4 border-bluishGreen flex justify-center flex-col items-center font-montserrat text-lg text-[#a5a5a5]
    font-medium outline-red-500 
    `}>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row item-center justify-center  p-2"
      >
    <p>
        Desenvolvido por
        <Link href={developer} target="_blank">
          <span className="text-bluishGreen">{` ${pageInfo?.name}`}</span>
          <br />
        </Link>
        Copyright &copy; 2023
      </p>
      </motion.div>

    </div>
  );
};

export default Footer;
