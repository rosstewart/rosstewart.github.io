import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GymBrainPrivacyPolicy from "./pages/GymBrainPrivacyPolicy";
import HumanizerPage from './pages/HumanizerPage';
import ResearchPage from './pages/ResearchPage';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactMePage from './pages/ContactMePage';
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/gym-brain/privacy-policy" element={<GymBrainPrivacyPolicy />} />
            <Route path="/projects/ai-humanizer" element={<HumanizerPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/about-me" element={<AboutMePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact-me" element={<ContactMePage />} />
          </Routes>
        </Router>
        <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
