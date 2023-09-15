import React from "react";
import { Avatar, Heading, VStack, Box, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ProfilePic from "../profile.png";
// import Humanizer from "./Humanizer";
// import { useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCopy } from '@fortawesome/free-solid-svg-icons';

const greeting = "Hello, I am Ross Stewart!";
const bio1 = "A Software Engineer";
const bio2 = "specialized in Mobile & Web Applications";

const frameworksAndLibraries = [
  {
    name: "React",
    getImageSrc: () => require("../assets/languageIcons/react.png"),
    url: "https://react.dev/"
  },
  {
    name: "Flutter",
    getImageSrc: () => require("../assets/languageIcons/flutter.png"),
    url: "https://flutter.dev/"
  },
  {
    name: "PyTorch",
    getImageSrc: () => require("../assets/languageIcons/pytorch.png"),
    url: "https://pytorch.org/"
  },
  {
    name: "Unity",
    getImageSrc: () => require("../assets/languageIcons/unity.png"),
    url: "https://unity.com/"
  },
]
const frontendLanguages = [
  {
    name: "HTML",
    getImageSrc: () => require("../assets/languageIcons/html.png"),
    url: "https://en.wikipedia.org/wiki/HTML"
  },
  {
    name: "CSS",
    getImageSrc: () => require("../assets/languageIcons/css.png"),
    url: "https://en.wikipedia.org/wiki/CSS"
  },
  {
    name: "JavaScript",
    getImageSrc: () => require("../assets/languageIcons/js.webp"),
    url: "https://en.wikipedia.org/wiki/JavaScript"
  },
  {
    name: "Dart",
    getImageSrc: () => require("../assets/languageIcons/dart.webp"),
    url: "https://dart.dev/"
  },
];
const backendAndDataLanguages = [
  {
    name: "Java",
    getImageSrc: () => require("../assets/languageIcons/java.png"),
    url: "https://www.java.com/en/"
  },
  {
    name: "Python",
    getImageSrc: () => require("../assets/languageIcons/python.png"),
    url: "https://www.python.org/"
  },
  {
    name: "JavaScript",
    getImageSrc: () => require("../assets/languageIcons/js.webp"),
    url: "https://en.wikipedia.org/wiki/JavaScript"
  },
  {
    name: "R",
    getImageSrc: () => require("../assets/languageIcons/r.png"),
    url: "https://www.r-project.org/"
  },
  {
    name: "C",
    getImageSrc: () => require("../assets/languageIcons/c.png"),
    url: "https://en.wikipedia.org/wiki/C_(programming_language)"
  },
  {
    name: "C#",
    getImageSrc: () => require("../assets/languageIcons/cs.png"),
    url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
  },
  {
    name: "C++",
    getImageSrc: () => require("../assets/languageIcons/cpp.png"),
    url: "https://en.wikipedia.org/wiki/C%2B%2B"
  },
  {
    name: "PERL",
    getImageSrc: () => require("../assets/languageIcons/perl.png"),
    url: "https://www.perl.org/"
  },
];
const designTools = [
  {
    name: "Figma",
    getImageSrc: () => require("../assets/languageIcons/figma.webp"),
    url: "https://www.figma.com/"
  },
  {
    name: "Blender",
    getImageSrc: () => require("../assets/languageIcons/blender.png"),
    url: "https://www.blender.org/"
  },
];

const LandingSection = () => (
  <FullScreenSection style={{ width: "100vw" }}
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    background="linear-gradient(to top, #6d143b, #850058, #900083, #8200bc, #001eff)"
  >
    <VStack marginTop={["80px", "100px", "120px", "140px"]} marginBottom="150px">
      <Avatar height={[61, 90, 120]} width={[61, 90, 120]} src={ProfilePic} />
      <Heading as="h4" fontSize={["sm", "md", "lg"]}>{greeting}</Heading>
      <Box height={25}></Box>
      <Heading textAlign="center" as="h1" fontSize={["xl", "2xl", "3xl", "4xl"]} margin="0 3vw">{bio1}</Heading>
      <Heading textAlign="center" as="h1" fontSize={["lg", "xl", "2xl", "3xl"]} margin="0 3vw">{bio2}</Heading>
      <Heading as="h6" fontSize={["md", "lg", "xl", "2xl"]} marginTop={["50px","80px"]} marginBottom="10px">Developer Skills</Heading>
      <LanguageWrapper heading="Frameworks & Libraries" languages={frameworksAndLibraries} />
      <LanguageWrapper heading="Front-End Languages" languages={frontendLanguages} />
      <LanguageWrapper heading="Back-End and Object/Data-Oriented Languages" languages={backendAndDataLanguages} />
      <LanguageWrapper heading="Design Tools" languages={designTools} />
    </VStack>

  </FullScreenSection>
);

export default LandingSection;

function LanguageWrapper({ heading, languages }) {
  return (
    <>
      <LanguageHeader>{heading}</LanguageHeader>
      <HStack spacing={8} flexWrap="wrap" paddingLeft="20px" paddingRight="20px">
        {languages.map((language) => (
          <a target="_blank" href={language.url} key={language.name}>
            <img className="languageIcons" src={language.getImageSrc()} alt={`${language.name} icon`} />
            <Heading as="p" marginTop="6px" fontSize="3xs" textAlign="center">{language.name}</Heading>
          </a>))}
      </HStack>
    </>
  );
}

function LanguageHeader(props) {
  return <Heading textAlign="center" paddingLeft="20px" paddingRight="20px" as="h6" fontSize={["sm", "sm", "md"]} marginTop="20px" marginBottom="10px">{props.children}</Heading>;
}