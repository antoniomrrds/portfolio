import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../../../typings.d';
import ButtonNav from '../ButtonNav';
import {IoMenu} from "react-icons/io5";
import { useState } from 'react';
type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  const [open,setOpen] = useState(false);
  const linksMenu = [
    { name: 'About', destiny: '#about', classNameText: 'heroButton' },
    { name: 'Experience', destiny: '#experience', classNameText: 'heroButton' },
    { name: 'Skills', destiny: '#skills', classNameText: 'heroButton' },
    { name: 'Projects', destiny: '#projects', classNameText: 'heroButton' },
  ];
  return (
    <header className=" bg-black
    sticky top-0 p-2 md:flex md:items-center  md:justify-between     h-auto
    border-b-2 shadow z-20 hover:border-strong-red border-blue
    ">

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
        className="flex flex-row item-center justify-start "
      >


        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
        <span className='text-3xl cursor-pointer md:hidden flex ml-auto	'>
          <IoMenu color='gray' size={50} onClick={()=> setOpen(!open)}/>
        </span>
      </motion.div>

      <Link href="#contact" passHref legacyBehavior>
        <motion.nav
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
          className={`flex md:items-center md:flex-row flex-col text-white
         bg-white
          md:z-auto md:static absolute left-0   max-md:w-full  md:opacity-100  z-[20] md:pb-0
          max-md:border-b-2 shadow
        max-md:border-strong-red
           transition-all ease-in-out duration-1000 ${open?'top-[66px]  opacity-100':'top-[-500px] '} md:opacity-100 opacity-0
          `}>
          {linksMenu.map((links) => (
            <ButtonNav
              key={links.name}
              name={links.name}
              destiny={links.destiny}
              classNameText={links.classNameText}
              clicked={()=> setOpen(!open)}
            />
          ))}

          <SocialIcon
            className="cursor-pointer"
            fgColor="gray"
            network="email"
            bgColor="transparent"
          />
          <p className="uppercase hidden max-md:inline-flex  lg:inline-flex text-sm text-white  duration-500 mx-4 py-2 px-6 ">
            Get In Touch
          </p>
        </motion.nav>
      </Link>
    </header>
  );
};

export default Header;
