import styled from 'styled-components'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import About from './sections/about/about'
import HomeSection from './sections/home/home'
import ProjectsSection from './sections/projects/projects'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`

function App() {

  return (
    <div className="App">
      <Header/>
      <Main>
        <HomeSection/>
        <About/>
        <ProjectsSection/>
      </Main>
      <Footer/>
    </div>
  )
}

export default App
