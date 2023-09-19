import Header from "../components/Header";
import Footer from "../components/Footer";
import FullScreenSection from "../components/FullScreenSection";
import { VStack, Box, Heading } from "@chakra-ui/react";
import ProjectsSection from "../components/ProjectsSection";

function ProjectsPage() {
    return (
        <>
            <Header />
            <main>
                <ProjectsSection style={{ width: "100vw" }} />
            </main >
            <Footer />
        </>
    )
}


export default ProjectsPage;