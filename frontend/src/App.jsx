import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import SkillComponent from "./components/Skill/Skill";
import Projects from "./components/Project/Project";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Banner />
        <SkillComponent />
        <Projects />
        <Testimonial />
        <Contact />
        <Footer/>
      </ChakraProvider>
    </>
  );
}

export default App;
