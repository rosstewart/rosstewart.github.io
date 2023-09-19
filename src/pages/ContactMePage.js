import Header from "../components/Header";
import Footer from "../components/Footer";
import FullScreenSection from "../components/FullScreenSection";
import { VStack, Box, Heading } from "@chakra-ui/react";
import ContactMeSection from "../components/ContactMeSection";

function ContactMePage() {
    return (
        <>
            <Header />
            <main>
                <ContactMeSection style={{ width: "100vw" }} />
            </main >
            <Footer />
        </>
    )
}


export default ContactMePage;