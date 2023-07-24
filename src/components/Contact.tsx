import { FC } from "react";
import { useAppSelector } from "../redux/reduxHooks";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact: FC = () => {
  const navHeight = useAppSelector(
    (store: { navHeight: any }) => store.navHeight
  );

  return (
    <section
      id="contact"
      className="px-8 space-y-12 md:px-24 md:mt-12"
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tighter text-center text-white font-openSans">
        Contact me
      </h1>
      <div className="flex flex-col items-center py-8 text-white md:py-20 md:flex-row">
        <div
          className="flex flex-col items-center"
          style={{ flexBasis: "50%" }}
        >
          <div className="flex flex-col space-y-8">
            <h1 className="text-3xl font-medium md:text-5xl">
              Want to contact me? Sure, just don&apos;t send me snail mail.
            </h1>
            <p className="text-xl text-white-secondary md:text-2xl md:w-2/3">
              You can find me on these platforms:
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-start mt-8 md:items-center md:mt-0"
          style={{ flexBasis: "50%" }}
        >
          <ul className="space-y-5 text-lg font-bold text-white-secondary font-openSans md:text-2xl">
            <li>
              <a
                href="https://github.com/mshnas9"
                className="flex items-center space-x-5 hover:text-slate-300"
              >
                <FaGithub size={30} color="#3b82f6" />
                <p>Github</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mshnas9"
                className="flex items-center space-x-5 hover:text-slate-300"
              >
                <FaLinkedin size={30} color="#3b82f6" />
                <p>LinkedIn</p>
              </a>
            </li>

            <li>
              <a
                href="mailto:mshnas9@gmail.com"
                className="flex items-center space-x-5 hover:text-slate-300"
              >
                <HiMail size={30} color="#3b82E1" />
                <p>mshnas9@gmail.com</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
