import Header from "../components/Header";
import LandingSection from "../components/LandingSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactMeSection from "../components/ContactMeSection";
import Footer from "../components/Footer";
import { useLocation} from "react-router-dom";
import { useEffect } from "react";

function HomePage() {
    const location = useLocation();
    useEffect(() => {
        // Check if the pathname is "/#projects"
        if (window.location.pathname == '/' && window.location.hash === '#projects') {
            // Set the desired scroll position for the element with id "projects"
            const projectsElement = document.getElementById('projects-section');
            if (projectsElement) {
                projectsElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    }, [location]);
    useEffect(() => {
        // Check if the pathname is "/#projects"
        if (window.location.pathname == '/' && window.location.hash === '#contact-me') {
            // Set the desired scroll position for the element with id "projects"
            const projectsElement = document.getElementById('contactme-section');
            if (projectsElement) {
                projectsElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    }, [location]);
    return (
        <>
            <Header />
            <main>
                <LandingSection style={{ width: "100%" }} />
                <ProjectsSection style={{ width: "100vw" }} />
                <ContactMeSection style={{ width: "100vw" }} />
            </main>
            <Footer />
        </>
    )
}

export default HomePage;