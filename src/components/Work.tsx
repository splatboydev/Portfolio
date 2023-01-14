import { FC } from "react";
import projects from "../workData";
import WorkCard from "./WorkCard";
import { useAppSelector } from "../redux/reduxHooks";
import { motion } from "framer-motion";

const Work: FC = () => {
  const navHeight = useAppSelector((store) => store.navHeight);

  return (
    <motion.section
      id="work"
      className="space-y-12 px-8 md:px-24"
      style={{ scrollMarginTop: `${navHeight}px` }}
      layout
    >
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-6 leading-tight tracking-tighter">
        My Projects
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <WorkCard
            title={project.title}
            techTitle={project.techTitle}
            description={project.description}
            repoLink={project.repoLink}
            index={i}
            key={i}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Work;
