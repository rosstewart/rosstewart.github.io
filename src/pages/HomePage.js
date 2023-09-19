import Header from "../components/Header";
import CarouselComponent from "../components/CarouselComponent";
// import LandingSection from "../components/LandingSection";
// import ResearchSection from "../components/ResearchSection";
// import ProjectsSection from "../components/ProjectsSection";
// import ContactMeSection from "../components/ContactMeSection";
import Footer from "../components/Footer";
// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

function HomePage() {
    // Old function to scroll down to a specific section in the home page

    // const location = useLocation();

    // useEffect(() => {
    //     // Split the location.hash into parts, as HashRouter uses the hash for routes
    //     const parts = location.hash.split('#');

    //     // Check if the second hash is the desired value
    //     if (parts[1] === 'contact-me') {
    //         const contactElement = document.getElementById('contactme-section');
    //         if (contactElement) {
    //             contactElement.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "start",
    //             });
    //         }
    //     } else {
    //         const otherElement = document.getElementById(`${parts[1]}-section`);
    //         if (otherElement) {
    //             otherElement.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "start",
    //             });
    //         }
    //     }
    // }, [location]);

    return (
        <>
            <Header />
            <main>
                <CarouselComponent style={{ width: "100vw" }} />
                {/* <LandingSection style={{ width: "100vw" }} /> */}
                {/* <ResearchSection style={{ width: "100vw" }} /> */}
                {/* <ProjectsSection style={{ width: "100vw" }} />
                <ContactMeSection style={{ width: "100vw" }} /> */}
            </main>
            <Footer />
        </>
    )
}

export default HomePage;