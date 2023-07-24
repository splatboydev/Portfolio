import { FC } from "react";
import { RiAdminFill, RiComputerLine, RiStrikethrough } from "react-icons/ri";
import { FiArchive, FiDatabase } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { useAppSelector } from "../redux/reduxHooks";
import { FaAnchor, FaStrikethrough } from "react-icons/fa";

const Tools: FC = () => {
  const navHeight = useAppSelector((store) => store.navHeight);

  return (
    <section
      id="tools"
      className="px-10 mt-16 space-y-14 md:px-24"
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tighter text-center text-white font-openSans">
        Tools I use
      </h1>
      <div className="grid gap-10 py-10 text-white md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col items-start flex-auto px-16 py-8 space-y-6 transition-all rounded-lg bg-bg-surface bg-gradient-to-b from-violet-500 to-fuchsia-500 outline outline-0 outline-fuchsia-500 h-85 hover:outline-4">
          <FiArchive color="#C3C1BA" size={100} className="self-center" />
          <h1 className="self-center text-3xl font-bold font-openSans">
            Web Development
          </h1>
          <h2>I have used or am currently using the following for webdev:</h2>
          <ul className="list-disc text-white-300">
            <h2>Backend Web Development:</h2>
            <li>HTML, CSS, JavaScript </li>
            <li>ReactJS, NextJS</li>
            <li>TailwindCSS</li>
          </ul>
          <ul className="list-disc text-white-300">
            <h2>Backend Web Development:</h2>
            <li>Flask</li>
            <li>Django</li>
            <li>Node.js</li>
          </ul>
          <ul className="list-disc text-white-300">
            <h2>Database and Data Management:</h2>
            <li>SQLite</li>
            <li>PostgreSQL</li>
          </ul>

        </div>
        <div className="flex flex-col items-start px-16 py-8 space-y-6 transition-all rounded-lg bg-bg-surface bg-gradient-to-r from-cyan-500 to-blue-500 outline outline-0 outline-blue-500 h-85 md:col-span-2 lg:col-span-1 hover:outline-4">
          <FaAnchor color="#C3C1BA" size={100} className="self-center" />
          <h1 className="self-center text-3xl font-bold font-openSans">
            Generally Used Languages
          </h1>
          <h2>I have used or am currently using the following languages:</h2>
          <ul className="list-disc text-white-300">
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>Shell</li>

          </ul>
          <ul className="list-disc text-white-300">
            <h2>Other Tools:</h2>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Jupyter Notebook</li>

          </ul>

        </div>
      </div>
    </section>
  );
};

export default Tools;
