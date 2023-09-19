import Header from "../components/Header";
import Footer from "../components/Footer";
import FullScreenSection from "../components/FullScreenSection";
import { VStack, Box, Heading } from "@chakra-ui/react";
import StandaloneResearchSection from "../components/StandaloneResearchSection";

function ResearchPage() {
    return (
        <>
            <Header />
            <main>
                <FullScreenSection style={{ width: "100vw" }}
                    justifyContent="center"
                    isDarkBackground
                    background="linear-gradient(to right, #001F3F, #008080)">
                    <Box margin="100px 50px 150px" maxWidth="1280px" width="100%">
                        <StandaloneResearchSection />
                    </Box>
                </FullScreenSection>
            </main >
            <Footer />
        </>
    )
}


export default ResearchPage;