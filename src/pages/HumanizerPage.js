import Header from "../components/Header";
import Footer from "../components/Footer";
import FullScreenSection from "../components/FullScreenSection";
import { VStack, Box, Heading } from "@chakra-ui/react";
import Humanizer from "../components/Humanizer";

function HumanizerPage() {
    return (
        <>
            <Header />
            <main>
                <FullScreenSection style={{ width: "100vw" }}
                    justifyContent="center"
                    isDarkBackground
                    background="radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1), transparent 50%),
                    radial-gradient(circle at 90% 80%, rgba(255,255,255,0.1), transparent 50%),
                    linear-gradient(to bottom right, #1a1a2e, #16213e, #0f3460, #1b3a4b, #2e8bc0)">
                    <Box margin="100px 50px 150px" maxWidth="1280px" width="100%">
                        <Humanizer />
                    </Box>
                </FullScreenSection>
            </main >
            <Footer />
        </>
    )
}


export default HumanizerPage;