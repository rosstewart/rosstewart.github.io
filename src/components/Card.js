import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";



const Card = ({ title, description, imageSrc, socials, clickable }) => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateIfClickable = () => {
    if (clickable) {
      // Make lowercase and replace spaces with hyphens
      let subPath = title.toLowerCase().replace(/ /g, '-');
      navigate(`/projects/${subPath}`);
      scrollToTop();
    }
  }

  return (
    <VStack
      align="stretch"
      // justify="space-between"
      w="100%"
      h="100%"
      bg="white"
      rounded="lg"
      boxShadow="lg"
      maxWidth="580px"
    >
      <button onClick={() => navigateIfClickable()}>
        <Image
          w="100%"
          // h="100%"
          h="500px"
          rounded="lg"
          boxShadow="lg"
          objectFit="cover"
          src={imageSrc}
        />
      </button>
      <Box marginLeft="15px" marginRight="15px">
        <HStack justifyContent="space-between" alignItems="start">
          {title === "Gym-Brain" ?
            <div>
              <Heading display="inline" marginTop="5px" marginBottom={3} marginRight="10px" as="h3" size="md" fontWeight="semibold" color="black">{title}</Heading>
              <button onClick={() => { navigate("/projects/gym-brain/privacy-policy"); scrollToTop(); }} className="privacyPolicy">Privacy Policy</button>
            </div>
            : <Heading marginTop="5px" marginBottom={3} as="h3" size="md" fontWeight="semibold" color="black">{title}</Heading>}
          {socials?.length > 0 && <HStack marginBottom={3} justifyContent="center" borderRadius="5px" padding="5px" backgroundColor="#18181b" spacing={6}>
            {socials.map((social) => (<a href={social.url} target="_blank" key={social.icon.iconName}><FontAwesomeIcon icon={social.icon} size="2x" /></a>))}
          </HStack>}
        </HStack>
        <Text as="h6" size="sm" fontWeight="normal" color="gray">{description}</Text>
        <button onClick={() => navigateIfClickable()}>
          {clickable && <HStack spacing={3} paddingTop="5px" paddingBottom="15px">
            <Text display="inline" as="h6" size="sm" fontWeight="light" color="black">See more</Text>
            <FontAwesomeIcon display="inline" icon={faArrowRight} size="1x" color="black" />
          </HStack>}
        </button>

      </Box>
    </VStack>);
};

export default Card;

