import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  // Progress,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import "./ContactMeSection.css"
import { useMediaQuery } from "@chakra-ui/react";
// import LoadingIndicator from "./LoadingIndicator";

const ContactMeSection = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  const formik = useFormik({
    initialValues: { firstName: '', email: '', type: 'hireMe', comment: '' },
    onSubmit: (values) => {
      submit("example.com", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      type: Yup.string().notRequired(),
      comment: Yup.string().required('Required').min(25, 'Must be at least 25 characters'),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      background="linear-gradient(to top, #6d143b, #850058, #900083, #8200bc, #001eff)"
      py={16}
      spacing={8}
      width="100%"
    >
        <VStack className={isMobile ? 'lightPadding' : ''} minW="350px" maxW={isMobile ? "513px" : "1280px"} w="100%" p={32} alignItems="flex-start">
          <Heading as="h1" id="contactme-section">
            Contact me
          </Heading>
          <Box p={6} rounded="md" w="100%">
            <form>
              <VStack spacing={4}>
                <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                  <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Input
                    {...formik.getFieldProps('firstName')}
                    id="firstName"
                    name="firstName"
                  />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    {...formik.getFieldProps('email')}
                    id="email"
                    name="email"
                    type="email"
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.t && formik.errors.type}>
                  <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                  <Select
                    {...formik.getFieldProps('type')} id="type" name="type">
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">
                      Open source consultancy session
                    </option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>
                <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                  <FormLabel htmlFor="comment">Your message</FormLabel>
                  <Textarea
                    {...formik.getFieldProps('comment')}
                    id="comment"
                    name="comment"
                    height={250}
                  />
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
                <a href="mailto: rosscstewart10@gmail.com"><Button colorScheme="blackAlpha" width="full">Submit</Button></a>
                {/* {!isLoading ? <Button onClick={(event) => {
                event.preventDefault();
                formik.handleSubmit();
              }} type="submit" colorScheme="blackAlpha" width="full">
                Submit
              </Button> : // show progress bar while submitting
                <LoadingIndicator />
              } */}
              </VStack>
            </form>
          </Box>
        </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
