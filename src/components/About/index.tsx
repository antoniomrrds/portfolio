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
    <div
      className="sectionMain max-mobileUS:h-auto
      max-w-[2000px] p-5 md:grid md:grid-flow-col md:gap-10  items-center max-mobileUL:px-4 relative text-center md:text-left mx-auto"
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
          className="
          rounded-full
          object-cover
          max-mobileL:w-40 max-mobileL:h-40
          w-56 h-56
          hover:shadow-xl hover:shadow-strong-red
          shadow-lg shadow-indigo-500/50
          mx-auto
          mb-5
          "
          src={urlFor(pageInfo?.profilePic).url()}
          alt={pageInfo?.name}
        />
      </picture>
      <div className="px-0 md:px-4">
        <h3
          className="md:text-left font-extrabold leading-5 text-indigo-600
        uppercase text-sm tracking-[5px] mb-[10px] hover:text-strong-red"
        >
          About
        </h3>
        <h4 className="text-4xl px-5 font-semibold hover:text-strong-red">
          {pageInfo?.name}
        </h4>
        <p
          className="max-md:text-sm text-base p-5
          max-mobileL:h-auto
          mb-5 "
        >
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </div>
  );
};

export default About;
