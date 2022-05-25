import Aritae from "../Projects/Aritae";
import TechTester from "../Projects/TechTester";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Header2 from "../shared/Header/Header2";
import Footer from "../shared/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aurify from "../Projects/Aurify";
import HelloSyr from "../Projects/HelloSyr";
import AlarmCentral from "../Projects/AlarmCentral";
import ScrollToTop from "../shared/ScrollToTop/ScrollToTop";

export const Layout = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header2 />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/aritae" element={<Aritae />} />
          <Route path="/projects/tech-tester" element={<TechTester />} />
          <Route path="/projects/hello-syracuse" element={<HelloSyr />} />
          <Route path="/projects/aurify" element={<Aurify />} />
          <Route path="/projects/alarm-central" element={<AlarmCentral />} />
          <Route path="/" element={<Projects />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};
