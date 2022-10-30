import styled from 'styled-components'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import About from './sections/about/about'
import HomeSection from './sections/home/home'
import ProjectsSection from './sections/projects/projects'
import ArrowIcon from './components/ArrowIcon'
import { useRef } from 'react'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
        <HomeSection/>
        <ArrowIcon ref={aboutRef}/>
        <About/>
        <ArrowIcon ref={projectsRef}/>
        <ProjectsSection/>
        <ArrowIcon/>
      </Main>
      <Footer ref={connectRef}/>
    </div>
  )
}

export default App
