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
      className="space-y-14 px-10 md:px-24 mt-16"
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-8 leading-tight tracking-tighter">
        Tools I use
      </h1>
      <div className="text-white grid md:grid-cols-2 lg:grid-cols-2 gap-10 py-10">
        <div className="bg-bg-surface bg-gradient-to-b from-violet-500 to-fuchsia-500 outline outline-0 outline-fuchsia-500 rounded-lg py-8 px-16 flex flex-col flex-auto h-85 space-y-6 items-start transition-all hover:outline-4">
          <FiArchive color="#C3C1BA" size={100} className="self-center" />
          <h1 className="font-openSans font-bold text-3xl self-center">
            Web Development
          </h1>
          <h2>I have used or am currently using the following for frontend webdev:</h2>
          <ul className="list-disc text-white-300">
            <li>&emsp;HTML, CSS, JavaScript</li>
            <li>&emsp;ReactJS, NextJS, Remix, THREE</li>
            <li>&emsp;TailwindCSS</li>
          </ul>
        </div>
        <div className="bg-bg-surface bg-gradient-to-r from-cyan-500 to-blue-500 outline outline-0 outline-blue-500 rounded-lg py-8 px-16 flex flex-col h-85 space-y-6 items-start md:col-span-2 lg:col-span-1 transition-all hover:outline-4">
          <FaAnchor color="#C3C1BA" size={100} className="self-center" />
          <h1 className="font-openSans font-bold text-3xl self-center">
            High-level Languages
          </h1>
          <h2>I have used or am currently using the following for frontend webdev:</h2>
          <ul className="list-decimal text-white-300">
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li className="text-red-500">Rust? 🦀</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tools;
