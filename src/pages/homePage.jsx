import { useRef } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer"
import About from "../homePageSections/about/about";
import HomeSection from "../homePageSections/home/home";
import ProjectsSection from "../homePageSections/projects/projects";
import Connect from "../homePageSections/connect/connect";
import ArrowIcon from "../components/ArrowIcon";
import styled from "styled-components";


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
    return(
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
    )
}

export default HomePage