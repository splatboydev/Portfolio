import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Picture: FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center px-8 py-12 md:px-24"
      layout
    >
      <motion.div
        className="overflow-hidden transition-all border-2 border-indigo-500 rounded-full drop-shadow-lg hover:brightness-110 aspect-square"
        animate={{y:10, transition:{duration: 2, ease: "easeInOut", repeat:Infinity, repeatType: "reverse"}}}
        initial={{y: -10}}
        >
        <Image
          src="/shareef.png"
          alt="Profile"
          width={110}
          height={110}
          priority
        />
      </motion.div>
      <motion.h1
        className="mt-6 text-3xl font-bold leading-tight tracking-tighter text-center font-openSans md:text-6xl gradient-text"
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        initial={{ opacity: 0 }}
      >
        Hello, I&apos;m Mohamad Shareef. 
      </motion.h1>
      <motion.p
        className="mx-auto mt-6 text-center md:w-1/2 text-sky-100"
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5}
        }}
        initial={{ opacity: 0, y: -30 }}
      >
        Welcome to my portfolio.<br />
        Want to learn more about me? Check out my GitHub.
      </motion.p>
    </motion.div>
  );
};

export default Picture;
