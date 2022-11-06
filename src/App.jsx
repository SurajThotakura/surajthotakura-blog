import styled from "styled-components";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import About from "./sections/about/about";
import HomeSection from "./sections/home/home";
import ProjectsSection from "./sections/projects/projects";
import ArrowIcon from "./components/ArrowIcon";
import { useRef, useEffect } from "react";
import Connect from "./sections/connect/connect";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const connectRef = useRef(null);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
