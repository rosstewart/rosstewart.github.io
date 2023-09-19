import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselComponent.css";
import { Box, Text, Heading, HStack } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const projects = [
    {
        title: "PICNIC",
        description:
            "Predicted protein structure refinement using machine learning concepts: Refining AlphaFold TS models using 3D convolutional neural networks",
        getImageSrc: () => require("../assets/projectImages/casp15.png"),
        clickable: false,
    },
    {
        title: "PICNIC2",
        description:
            "Predicted protein structure refinement: Residual networks used to improve PICNIC by utilizing skip connections",
        getImageSrc: () => require("../assets/projectImages/TSR_ResNet_Pipeline.png"),
        clickable: false,
    },
    {
        title: "AI Humanizer",
        description:
            "Software to convert normal AI-generated text into text that is undetectable by AI detection algorithms",
        getImageSrc: () => require("../assets/projectImages/humanizer.png"),
        clickable: true,
    },
    {
        title: "Gym-Brain",
        description:
            "Mobile Social Lifting Platform, Smart Workout Planner and Tracker, and a Gym Finder.",
        getImageSrc: () => require("../assets/projectImages/gymBrainSearch.png"),
        clickable: false,
    },
];

function CarouselComponent() {
    const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  // This will turn on auto-play
        autoplaySpeed: 3000,  // 2000ms = 2s; adjust this as required
        pauseOnHover: true,  // Pause autoplay when the user hovers over the slider
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    };


    const navigateIfClickable = (title) => {
        switch (title) {
            case "PICNIC":
            case "PICNIC2":
                navigate("/research");
                scrollToTop();
                break;
            case "AI Humanizer":
                // Make lowercase and replace spaces with hyphens
                let subPath = title.toLowerCase().replace(/ /g, '-');
                navigate(`/projects/${subPath}`);
                scrollToTop();
                break;
            case "Gym-Brain":
                navigate("/projects");
                scrollToTop();
                break;
            default:
                break;
        }
    }

    return (

        <div style={{ background: "radial-gradient(circle, #003366, #002240)", minHeight: "100vh" }}>
            <Box className="carousel-container" paddingTop={["90px", "100px", "120px"]}>
                <Heading as="h2" size={["sm", "md", "lg"]} color="white">Featured Research & Projects</Heading>
                <HStack style={{ marginBottom: "40px", marginTop: "20px" }} spacing="15px">
                    <button className="slide-content-button" onClick={() => navigate("/research")}>All Research</button>
                    <button className="slide-content-button" onClick={() => navigate("/projects")}>All Projects</button>
                </HStack>
                <Slider {...settings}>
                    {projects.map((project) => (<Slide title={project.title} subtitle={project.description} image={project.getImageSrc()} navigateIfClickable={navigateIfClickable} />)
                    )}
                </Slider>
            </Box>
        </div>
    );
}

function Slide({ title, subtitle, image, navigateIfClickable }) {
    const handleReadMore = () => {
        navigateIfClickable(title);
    };
    return <div className="slide">
        <button onClick={handleReadMore}><img src={image} alt="First Slide" /></button>
        <div className="slide-content">
            <Heading as="h2" size={["lg", "xl", "2xl"]} marginBottom="20px">{title}</Heading>
            <Text margin="auto" maxW="800px" as="p" fontSize={["12px", "15px", "18px"]} marginBottom="20px">{subtitle}</Text>
            <button className="slide-content-button" onClick={handleReadMore}>Read More</button>
        </div>
    </div>
}

export default CarouselComponent;
