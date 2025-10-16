import "./App.css";

import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { Layout } from "./Components/Layout";
import { Navbar } from "./Components/Navbar";
import { Project } from "./Components/Project";
import { Skill } from "./Components/Skill";
import { Route, Routes } from "react-router-dom";
// import { Layout } from "./Components/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Hero />} />
          <Route path="skills" element={<Skill />} />
          <Route path="projects" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
