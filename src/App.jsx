import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./header";
import Aside from "./aside";
import Home from "./home";
import Quote from "./quote";
import Projects from "./projects";
import Skills from "./skills";
import AboutMe from "./about-me";
import ContactMe from "./contact-me";
import Footer from "./footer";

function App() {
  useEffect(() => {
    Aos.init({ 
      duration: 1000,
      offset: -100,
      easing: 'ease-in-out', 
    });
  }, []);
  return (
    <>
      <Header />
      <Aside />
      <Home />
      <Quote />
      <Projects />
      <Skills />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
