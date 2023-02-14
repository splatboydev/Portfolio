import { FC } from "react";
import { HiArrowNarrowUp } from "react-icons/hi";

const ScrollTop: FC = () => {
  return (
    <a
      className="fixed right-12 bottom-12 md:right-20 md:bottom-16 p-3 md:p-4 bg-bg-surface rounded-full border-blue-500 border transition-all"
      href="#"
    >
      <HiArrowNarrowUp size={30} color="#C3C1BA" />
    </a>
  );
};

export default ScrollTop;
