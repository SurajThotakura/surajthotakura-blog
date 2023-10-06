import { useRef } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ArrowIcon from "../../components/minorComponents/ArrowIcon";
import styled from "styled-components";
import HomeSection from "./homePageSections/home";
import About from "./homePageSections/about";
import ProjectsSection from "./homePageSections/projects";
import Connect from "./homePageSections/connect";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const connectRef = useRef(null);
  return (
    <>
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        connectRef={connectRef}
      />
      <Main ref={homeRef}>
        <HomeSection />
        <ArrowIcon ref={aboutRef} />
        <About />
        <ArrowIcon ref={projectsRef} />
        <ProjectsSection />
        <ArrowIcon ref={connectRef} />
        <Connect />
      </Main>
      <Footer />
    </>
  );
};

export default HomePage;
