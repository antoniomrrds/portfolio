/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { urlFor } from '@/config/sanity';
import { motion } from 'framer-motion';
import { PageInfo } from 'typings';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <section id="about" >
      <div
        className="sectionMain max-sm:h-auto
        maxContainer p-5 md:grid md:grid-flow-col md:gap-10 items-center max-mobileUL:px-4  text-center md:text-left mx-auto"
      >
        <picture>
          <motion.img
            initial={{
              x: -200,
              rotateX: -360,
              y: 200,
              opacity: 0,
            }}
            transition={{
              duration: 2,
            }}
            whileInView={{ opacity: 1, x: 0, rotateX: 0, y: -0 }}
            viewport={{ once: true }}
            className=" rounded-full
          object-cover max-mobileL:w-40 max-mobileL:h-40 w-56 h-56 border-midnight-blue border-2 shadow-lg mx-auto max-md:mt-[80px] mb-5"
            src={urlFor(pageInfo?.profilePic).url()}
            alt={pageInfo?.name}
          />
        </picture>
        <motion.div
           initial={{
            x: 500,
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
          
          className="p-4 bg-midnight-blue clip-path-cardProject shadow-md shadow-black/5 dark:shadow-black/30">
          <h3
            className="md:text-left font-brunoAceSc px-5 font-extrabold leading-5 text-teal uppercase text-sm tracking-[5px] mb-[10px] "
          >
            About
          </h3>
          <h4 className="text-4xl px-5 font-semibold max-mobileS:text-xl font-brunoAceSc hover:text-teal">
            {pageInfo?.name}
          </h4>
          <p
            className="max-md:text-xs indent-4 text-sm p-5 max-mobileL:h-auto mb-5"
          >
            {pageInfo?.backgroundInformation}
          </p>
        </motion.div>
        </div>
    </section>
  );
};

export default About;
