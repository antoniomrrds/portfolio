import React from 'react'
import { motion } from 'framer-motion';
const BackgroundCicles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="border-[#333333] border rounded-full h-[300px] w-[300px] mt-52 absolute" />
      <div className="border-[#333333] border rounded-full h-[500px] w-[500px] mt-52 absolute" />
      <div className="border-[#ff0000] border rounded-full h-[650px] opacity-20 w-[650px] mt-52 animate-pulse absolute" />
      <div className="border-[#333333] border rounded-full h-[800px] w-[800px] mt-52  absolute" />
      <div />
    </motion.div>
  );
};

export default BackgroundCicles;
