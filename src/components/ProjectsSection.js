import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import {
  faGithub,
  faAppStoreIos,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Gym-Brain",
    description:
      "Gym-Brain is a Social Lifting Platform, Smart Workout Planner and Tracker, and a Gym Finder. With hundreds of exercises in the library, you can generate a workout routine, or customize your own depending on your goals. Share your workouts and progress with your friends and view each other's routines.",
    getImageSrc: () => require("../assets/projectImages/gymBrainSearch.png"),
    socials: [
      {
        icon: faGithub,
        url: "https://github.com/rosstewart/timeForGym",
      },
      {
        icon: faAppStoreIos,
        url: "https://apps.apple.com/us/app/gym-brain/id6459306371?platform=iphone",
      }
    ],
  },
  {
    title: "PICNIC",
    description:
      "Protein structure modelling using machine learning concepts: Refining AlphaFold TS models using 3D residual and convolutional neural networks",
    getImageSrc: () => require("../assets/projectImages/casp15.webp"),
    socials: [
      {
        icon: faGithub,
        url: "https://github.com/rosstewart/CASP15",
      },
      {
        icon: faFileAlt,
        url: "https://predictioncenter.org/casp15/doc/CASP15_Abstracts.pdf#page=193",
      }
    ],
  },
  {
    title: "Restaurant Web Application",
    description:
      "A response restaurant web application built with React JS for the Meta Intro to Front-End Development certificate. The restaurant is called \"Little Lemon\", with featured foods, reviews, information, and a feature to book a table in the restaurant, with simulated API calls.",
    getImageSrc: () => require("../assets/projectImages/littleLemon.png"),
    socials: [
      {
        icon: faGithub,
        url: "https://github.com/rosstewart/front_end_capstone",
      }
    ],
  },
  {
    title: "Hologis",
    description:
      "Unity AR GIS-based application for immersive virtual meetings across any place in the world",
    getImageSrc: () => require("../assets/projectImages/mallplaza.png"),
    socials: [
      {
        icon: faGithub,
        url: "https://github.com/rosstewart/MallplazaCenters",
      }
    ],
  },
  {
    title: "Java Pacman",
    description:
      "Java project to solve mazes uses DFS & BFS",
    getImageSrc: () => require("../assets/projectImages/pacman.png"),
    socials: [
      {
        icon: faGithub,
        url: "https://github.com/rosstewart/javaPacman",
      }
    ],
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      background="linear-gradient(to bottom, #6d143b, #850058, #900083, #8200bc, #001eff)"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            socials={project.socials}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
