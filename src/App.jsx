import styled from 'styled-components'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import About from './sections/about/about'
import HomeSection from './sections/home/home'
import ProjectsSection from './sections/projects/projects'
import { useRef } from 'react'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
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
        <HomeSection ref={aboutRef}/>
        <About/>
        <ProjectsSection ref={projectsRef}/>
      </Main>
      <Footer ref={connectRef}/>
    </div>
  )
}

export default App
