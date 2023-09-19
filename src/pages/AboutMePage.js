import Header from "../components/Header";
import Footer from "../components/Footer";
import FullScreenSection from "../components/FullScreenSection";
import { VStack, Box, Heading } from "@chakra-ui/react";
import AboutMeSection from "../components/AboutMeSection";

function AboutMePage() {
    return (
        <>
            <Header />
            <main>
                <AboutMeSection style={{ width: "100vw" }} />
            </main >
            <Footer />
        </>
    )
}


export default AboutMePage;