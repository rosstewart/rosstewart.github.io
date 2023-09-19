// import React from "react";
// import FullScreenSection from "./FullScreenSection";
// import { Box, Heading } from "@chakra-ui/react";
// import Card from "./Card";
// import {
//   faGithub,
//   // faAppStoreIos,
// } from "@fortawesome/free-brands-svg-icons";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFileAlt, faLink } from "@fortawesome/free-solid-svg-icons";

// const projects = [
//   {
//     title: "PICNIC",
//     description:
//       "Predicted protein structure refinement using machine learning concepts: Refining AlphaFold TS models using 3D convolutional neural networks",
//     getImageSrc: () => require("../assets/projectImages/casp15.png"),
//     socials: [
//       {
//         icon: faGithub,
//         url: "https://github.com/rosstewart/CASP15",
//       },
//       {
//         icon: faFileAlt,
//         url: "https://predictioncenter.org/casp15/doc/CASP15_Abstracts.pdf#page=193",
//       }
//     ],
//     clickable: false,
//   },
//   {
//     title: "PICNIC2",
//     description:
//       "Refining PICNIC using residual networks with skip connections",
//     getImageSrc: () => require("../assets/projectImages/TSR_ResNet_Pipeline.png"),
//     socials: [
//       {
//         icon: faGithub,
//         url: "https://github.com/rosstewart/CASP15",
//       },
//       {
//         icon: faFileAlt,
//         url: "https://predictioncenter.org/casp15/doc/CASP15_Abstracts.pdf#page=193",
//       }
//     ],
//     clickable: false,
//   },
// ];

// const ResearchSection = () => {
//   return (
//     <FullScreenSection
//       background="linear-gradient(to bottom, #6d143b, #850058, #900083, #8200bc, #001eff)"
//       isDarkBackground
//       p={8}
//       alignItems="flex-start"
//       spacing={8}
//     >
//       <Heading as="h1" id="research-section">
//         Research in Bioinformatics
//       </Heading>
//       <Box
//         display="grid"
//         gridTemplateColumns={{
//           base: "repeat(1, 1fr)",   // Single column on smaller screens
//           md: "repeat(2, minmax(0, 1fr))",  // Two columns on screens of width md and larger
//         }}
//         gridGap={8}
//       >
//         {projects.map((project) => (
//           <Card
//             key={project.title}
//             title={project.title}
//             description={project.description}
//             imageSrc={project.getImageSrc()}
//             socials={project.socials}
//             clickable={project.clickable}
//           />
//         ))}
//       </Box>
//     </FullScreenSection>
//   );
// };

// export default ResearchSection;
