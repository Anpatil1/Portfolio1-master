import React, { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import Preloader from "../src/components/Pre";
import { ThemeProvider } from "./components/ThemeProvider";
import NavbarNew from "./components/NavbarNew";
import Particle from "./components/Particle";
import AnimatedCursor from "./components/AnimatedCursor";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator";
import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/Blog/BlogPost";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Single Page Layout Component
  const SinglePageLayout = () => (
    <div className="single-page-container">
      <Particle />
      <section id="home">
        <Home />
        <Home2 />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Preloader load={load} />
          <div className="App creative-cursor-area" id={load ? "no-scroll" : "scroll"}>
            <ScrollProgressIndicator />
            <AnimatedCursor />
            <NavbarNew />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<SinglePageLayout />} />
              <Route path="/project" element={<SinglePageLayout />} />
              <Route path="/about" element={<SinglePageLayout />} />
              <Route path="/contact" element={<SinglePageLayout />} />
              <Route path="/resume" element={<SinglePageLayout />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
            <Footer />
          </div>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--background-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--primary-color)',
              },
            }}
          />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
