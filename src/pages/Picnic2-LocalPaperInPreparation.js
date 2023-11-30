import Header from "../components/Header";
import Footer from "../components/Footer";
import FullScreenSection from "../components/FullScreenSection";
import { Box } from "@chakra-ui/react";

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
                        <iframe width="100%" height="1000px" src="https://docs.google.com/document/d/e/2PACX-1vTenOUrX3O65sapAG-g2XS7-9IzBH0Wad6DxRIzFbzwOCQDklGTK29MDfF-lzTvmNTpwKr031VtwPrW/pub?embedded=true"></iframe>
                    </Box>
                </FullScreenSection>
            </main >
            <Footer />
        </>
    )
}


export default ResearchPage;