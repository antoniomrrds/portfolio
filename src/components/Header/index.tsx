import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../../../typings.d';
import ButtonNav from '../ButtonNav';

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="bg-black  border-b-2 hover:border-strong-red border-blue box-border w-full  sticky top-0 p-2 flex items-start  justify-between  mx-auto z-20 xl:items-center ">
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
        className="flex flex-row item-center "
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
      </motion.div>

      <Link href="#contact" passHref legacyBehavior>
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
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >

          <ButtonNav name="About" destiny="#about" classNameText="heroButton" />
          <ButtonNav
            name="Experience"
            destiny="#experience"
            classNameText="heroButton "
          />
          <ButtonNav
            name="Skills"
            destiny="#skills"
            classNameText="heroButton"
          />
          <ButtonNav
            name="Projects"
            destiny="#projects"
            classNameText="heroButton"
          />

          <SocialIcon
            className="cursor-pointer"
            fgColor="gray"
            network="email"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
