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
        duration: 0.8,
        delay: index + 1 !== 1 ? (index + 1) / 10 : 0,
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
      viewport={{ once: true }}
      className="flex flex-col px-10 py-8 space-y-2 text-white transition-all duration-200 rounded-sm bg-bg-surface hover:drop-shadow-2xl"
    >
      
      <p className="text-xl font-medium tracking-wider name-gradient">{title}</p>
      <p className="text-white-secondary">{description}</p>
      <p className="text-sm font-medium tracking-widest uppercase text-white-secondary">
        Tech Stack: {techTitle}
      </p>
      <div className="flex items-center space-x-2 font-medium text-xs !mt-3">
        <a
          href={repoLink}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 uppercase transition-all rounded-md outline outline-fuchsia-800 outline-0 hover:outline-4"
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
