import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GymBrainPrivacyPolicy from "./pages/GymBrainPrivacyPolicy";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/gym-brain/privacy-policy" element={<GymBrainPrivacyPolicy />} />
          </Routes>
        </Router>
        <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
