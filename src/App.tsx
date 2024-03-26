import { Route, Routes } from "react-router-dom";
import { Abouts } from "./pages/abouts";
import { Contact } from "./pages/contacts";
import { Hero } from "./pages/hero";
import { Layout } from "./pages/layout";
import { Projects } from "./pages/projects";
import { ProjectVim } from "./pages/projects/vim";
import React from "react";
import { Element } from "react-scroll";

function Home() {
  return (
    <React.Fragment>
      <Element name="top">
        <Hero />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="abouts">
        <Abouts />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </React.Fragment>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/projects" element={<Layout isRoot={false} />}>
        <Route path="vim-gamification" element={<ProjectVim />} />
      </Route>
    </Routes>
  );
}

export default App;
