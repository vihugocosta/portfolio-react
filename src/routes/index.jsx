import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import PageTransition from "../components/PageTransition";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function Rotas() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}