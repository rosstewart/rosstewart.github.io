import Header from "../components/Header";
import Footer from "../components/Footer";
import FullScreenSection from "../components/FullScreenSection";
import { VStack, Box, Heading } from "@chakra-ui/react";
import LogoWithName from "../assets/gymBrain/gym_brain_logo.png";

function GymBrainPrivacyPolicy() {
    return (
        <>
            <Header />
            <main>
                <FullScreenSection style={{ width: "100vw" }}
                    justifyContent="center"
                    // alignItems="center"
                    isDarkBackground
                    background="linear-gradient(to bottom, #151515, #262b35, #2c4457, #246177, #028090)">
                    <Box margin="100px 50px 150px" maxWidth="800px" className="gymBrainPrivacyPolicyText">
                        <img style={{ margin: "auto" }} width="250px" src={LogoWithName} />
                        <MainHeading marginTop="30px">Privacy Policy</MainHeading>
                        <SubHeading textAlign="center" marginTop="10px" marginBottom="50px" size="sm">Last Updated: 8/9/2023</SubHeading>
                        <BodyText>This Privacy Policy outlines how Gym Brain collects, uses, and safeguards
                            your personal information inside our Gym Brain mobile application.
                        </BodyText>
                        <SubHeading>Information We Collect</SubHeading>
                        {/* <BodyText> */}
                            <ul>
                                <ListItem><strong>Personal Information</strong>: We may collect personal information you provide to
                                    us, such as
                                    your name, email address, and fitness goals, when you register an account or use certain
                                    features of the App.</ListItem>
                                <ListItem><strong>Fitness Data</strong>: The App may allow you to input and track health and fitness
                                    data, such as
                                    workouts, weight, and progress. This data is not accessed outside of necessary application
                                    features.
                                </ListItem>
                                <ListItem><strong>Usage Data</strong>: We collect data on how you interact with the App, such as the
                                    features you
                                    use, time spent on the App, and device information (e.g., device type, operating system
                                    version).</ListItem>
                            </ul>
                        {/* </BodyText> */}
                        <SubHeading>How We Use Your Information</SubHeading>
                        {/* <BodyText> */}
                            <ul>
                                <ListItem>We use the personal information you provide to create and maintain your account, personalize
                                    your
                                    experience, and communicate with you about the App.</ListItem>
                                <ListItem>Health data and usage data are used to improve the App's features, enhance user experience,
                                    and for
                                    analytical purposes.</ListItem>
                            </ul>
                        {/* </BodyText> */}
                        <SubHeading>Data Security</SubHeading>
                        <BodyText>We take the security of your personal information seriously. We use reasonable administrative,
                            technical,
                            and physical measures to protect your information from unauthorized access, loss, or misuse.</BodyText>
                        <SubHeading>Third-Party Services</SubHeading>
                        <BodyText>The App may integrate with third-party services, such as analytics tools or social media
                            platforms. These
                            services have their own privacy policies, and we encourage you to review them.</BodyText>
                        <SubHeading>Changes to this Policy</SubHeading>
                        <BodyText>We may update this Privacy Policy from time to time. Any changes will be posted within the App,
                            and your
                            continued use of the App after such modifications will constitute your acknowledgment of the
                            modified
                            policy.</BodyText>
                        <SubHeading>Contact Us</SubHeading>
                        <BodyText>If you have any questions or concerns about this Privacy Policy or our practices, please email us
                            at
                            rosscstewart10@gmail.com.</BodyText>
                    </Box>
                </FullScreenSection>
            </main >
            <Footer />
        </>
    )
}

function MainHeading(props) {
    return <Heading textAlign="center" as="h1" size="2xl" {...props} >{props.children}</Heading>
}

function SubHeading(props) {
    return <Heading as="h2" size="lg" marginTop="50px" marginBottom="20px" {...props} >{props.children}</Heading>
}

function BodyText(props) {
    return <Heading as="p" size="xs" marginTop="15px" fontWeight="normal" {...props} >{props.children}</Heading>
}

function ListItem(props) {
    return <li style={{ marginTop: "15px" }} ><BodyText>{props.children}</BodyText></li>
}

export default GymBrainPrivacyPolicy;