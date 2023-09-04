import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, background, ...boxProps }) => {
  return (
    <VStack
      style={{
        // backgroundImage: boxProps.backgroundImage,
        color: isDarkBackground ? 'white' : 'black',
        width: '100vw', // Full viewport width
        minHeight: '100vh', // Full viewport height
        backgroundImage: background
      }}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
