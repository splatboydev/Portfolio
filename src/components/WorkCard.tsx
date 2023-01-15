import { FC } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface Props {
  title: string;
  techTitle: string;
  description: string;
  repoLink: string;
  index: number;
}

const WorkCard: FC<Props> = ({
  title,
  techTitle,
  description,
  repoLink,
  index,
}: Props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: isTabletOrMobile
          ? { x: index % 2 === 0 ? -30 : 30, opacity: 0 }
          : { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
      }}
      transition={{
        duration: 0.6,
        delay: index + 1 !== 1 ? (index + 1) / 10 : 0,
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
      viewport={{ once: true }}
      className="bg-bg-surface text-white px-10 py-8 flex flex-col space-y-2 rounded-sm transition-all duration-200 transform-gpu hover:drop-shadow-2xl"
    >
      <p className="text-white-secondary uppercase font-medium tracking-widest text-sm">
        {techTitle}
      </p>
      <p className="font-medium text-xl tracking-wider name-gradient">{title}</p>
      <p className="text-white-secondary">{description}</p>
      <div className="flex items-center space-x-2 font-medium text-xs !mt-3">
        <a
          href={repoLink}
          target="_blank"
          rel="noreferrer"
          className="uppercase py-2 px-4 rounded-md outline outline-fuchsia-800 outline-0 transition-all hover:outline-4"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(255, 0, 255, 0.15), rgba(196,80,196, 0.15))",
          }}
        >
          Repository
        </a>
      </div>
    </motion.div>
  );
};

export default WorkCard;
