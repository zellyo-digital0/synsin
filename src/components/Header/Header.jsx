import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Shared/Container";
import logoImg from "../../assets/images/logo.png";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");
  const [hasMargin, setHasMargin] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = (
    <>
      <HashLink
        to="#hero"
        className={`text-black font-semibold text-lg ${
          activeLink === "#hero" ? "active" : ""
        }`}
        smooth
        onClick={() => setActiveLink("#hero")}
      >
        Home
      </HashLink>
      <HashLink
        to="#about-us"
        className={`text-black font-semibold text-lg ${
          activeLink === "#about-us" ? "active" : ""
        }`}
        smooth
        onClick={() => setActiveLink("#about-us")}
      >
        About Us
      </HashLink>
      <HashLink
        to="#services"
        className={`text-black font-semibold text-lg ${
          activeLink === "#services" ? "active" : ""
        }`}
        smooth
        onClick={() => setActiveLink("#services")}
      >
        Services
      </HashLink>
      <HashLink
        to="#contact"
        className={`text-black font-semibold text-lg ${
          activeLink === "#contact" ? "active" : ""
        }`}
        smooth
        onClick={() => setActiveLink("#contact")}
      >
        Contact
      </HashLink>
    </>
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setHasMargin(!hasMargin);
  };

  return (
    <header
      className={`p-4 ${
        hasMargin ? "-mb-20" : ""
      } fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky || isOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Container>
        <div>
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl font-bold">
              <img src={logoImg} className="w-[172px]" alt="Logo" />
            </div>
            <nav className="hidden md:flex md:space-x-[30px] lg:space-x-[44px]">
              {links}
            </nav>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black text-2xl focus:outline-none"
              >
                {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <nav className="flex flex-col space-y-4 mt-4 items-center">
                  {links}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
};

export default Header;
