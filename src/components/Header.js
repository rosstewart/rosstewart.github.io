import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { /*faE, */faBars, faEnvelope,/*,faG*/
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  // faMedium,
  // faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: rosscstewart10@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/rosstewart",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ross-stewart-16523b220/",
  },
  // {
  //   icon: faMedium,
  //   url: "https://medium.com",
  // },
  // {
  //   icon: faStackOverflow,
  //   url: "https://stackoverflow.com",
  // },
];

const Header = () => {
  const [useSmallHeader] = useMediaQuery('(max-width: 565px)');
  const useSmallHeaderRef = useRef(useSmallHeader);
  useSmallHeaderRef.current = useSmallHeader; // Update the ref whenever useSmallHeader changes
  const [showDropdown, setShowDropdown] = useState(false);
  const showDropdownRef = useRef(showDropdown);
  showDropdownRef.current = showDropdown; // Update the ref whenever showDropdown changes
  const navigate = useNavigate();
  const location = useLocation();
  const previousScrollY = useRef(0);

  const handleClick = (anchor) => () => {
    if (anchor === "home") {
      if (location.pathname.length > 1) {
        navigate("/");
      } else {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    if (location.pathname.length > 1) {
      navigate("/");
    }
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = () => {
    // console.log(showDropdown);
    const currentScrollY = window.scrollY;
    const header = document.getElementById("header");

    // if (showDropdown) {
    //   // Don't hide menu if the dropdown is visible
    //   header.style.transform = "translateY(0)";
    //   previousScrollY.current = currentScrollY;
    //   console.log(showDropdown ? "showDropdown" : "don't show dropdown");
    //   return;
    // }

    const dropdown = document.getElementById("headerDropdown");
    if (dropdown != undefined && currentScrollY > previousScrollY.current) dropdown.style.transform = "translateY(-100px)";


    header.style.transform = `translateY(${currentScrollY > previousScrollY.current ? "-100px" : 0})`;

    // Use showDropdownRef.current to get the current value
    if (dropdown != undefined && currentScrollY < previousScrollY.current && showDropdownRef.current) dropdown.style.transform = "translateY(166px)";

    previousScrollY.current = currentScrollY;
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownClick = () => {
    const dropdown = document.getElementById("headerDropdown");
    dropdown.style.transform = `translateY(${showDropdown ? "-100px" : "166px"})`;
    setShowDropdown(!showDropdown);
  }

  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
        id="header"
        zIndex={2}
      >
        <nav>
          <Box color="white" maxWidth="1280px" margin="0 auto">
            <HStack
              px={16}
              py={4}
              justifyContent="space-between"
              alignItems="center"
              spacing={8}
            >
              <HStack spacing={8}>
                {socials.map((social) => (<a href={social.url} key={social.icon.iconName} target="_blank"><FontAwesomeIcon icon={social.icon} size="2x" /></a>))}
              </HStack>
              {useSmallHeader ? <button onClick={() => handleDropdownClick()}><FontAwesomeIcon icon={faBars} size="2x" /></button> : <PageLinks id="" handleClick={handleClick} />}
            </HStack>
          </Box>
        </nav>
      </Box>
      {useSmallHeader && <PageLinks id="headerDropdown" handleClick={handleClick} />}
    </>
  );
};
export default Header;

function PageLinks({ handleClick, id }) {
  const style = id === "headerDropdown" ? {
    top: "-100px",
    left: 0,
    right: 0,
    translateY: "-100px",
    transitionProperty: "transform",
    transitionDuration: ".3s",
    transitionTimingFunction: "ease-in-out",
    zIndex: 1,
    backgroundColor: "#18181b",
    position: "fixed",
    pb: "10px",
    color: "white"
  } : {};
  return (
    <HStack id={id} spacing={8} justifyContent="center" {...style}>
      <button onClick={handleClick("home")}>Home</button>
      <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
      <a href="/#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
    </HStack>
  )
}
