import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Social } from '../../../../typings';

import { IoClose, IoMenu } from 'react-icons/io5';
import { useState } from 'react';
import ButtonNav from '../ButtonNav';
type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  const [open, setOpen] = useState(false);
  const linksMenu = [
    { name: 'Home', destiny: '/', classNameText: 'linksMenu' },
    { name: 'About', destiny: '#about', classNameText: 'linksMenu' },
    { name: 'Skills', destiny: '#skills', classNameText: 'linksMenu' },
    { name: 'Projects', destiny: '#projects', classNameText: 'linksMenu' },
    { name: 'Contact', destiny: '#contact', classNameText: 'linksMenu' },
  ];

  const handleOpenMenu = () => {
    const width = window.innerWidth;
    if (width <= 768) return setOpen(!open);
    return;
  };

  return (
    <header
      className="shadow-md w-full sticky top-0 border-b-2  z-20 hover:border-strong-red border-blue"
    >
      <div className="md:flex md:items-center  md:justify-between  bg-midnight-blue py-4 md:px-10 px-7">
        <motion.div
          initial={{
            y: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
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
          <div
            onClick={() => handleOpenMenu()}
            className="text-3xl cursor-pointer md:hidden flex ml-auto items-center 	"
          >
            {open ? (
              <IoClose color="gray" size={50} />
            ) : (
              <IoMenu color="gray" size={50} />
            )}
          </div>
        </motion.div>

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
          className={`flex md:items-center md:flex-row flex-col
        max-md:bg-white
          md:z-auto md:static absolute left-0   max-md:w-full  md:opacity-100  z-[-1]
          max-md:border-b-2  max-md:shadow
        max-md:border-strong-red
           transition-all ease-in-out duration-500 ${
             open ? 'top-[82px]  opacity-100' : 'top-[-500px] '
           } md:opacity-100 opacity-0
          `}
        >

          {linksMenu.map((links) => (
            <ButtonNav
              key={links.name}
              name={links.name}
              destiny={links.destiny}
              classNameText={links.classNameText}
              clicked={() => handleOpenMenu()}
            />
          ))}
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
