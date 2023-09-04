import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { /*faE, */faEnvelope/*,faG*/ } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  // faMedium,
  // faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { useLocation, useNavigate, Link } from 'react-router-dom';

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
    const currentScrollY = window.scrollY;
    const header = document.getElementById("header");

    if (currentScrollY > previousScrollY.current) {
      // Scrolling down
      header.style.transform = "translateY(-200px)";
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)";
    }

    previousScrollY.current = currentScrollY;
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
      zIndex={1}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          spacing={8}
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((social) => (<a href={social.url} key={social.icon.iconName}><FontAwesomeIcon icon={social.icon} size="2x" /></a>))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <button onClick={handleClick("home")}>Home</button>
              <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
