import React from "react"
import styled from "styled-components"
import { colors } from "../../constants"
import { ArrowForward28Filled } from '@fluentui/react-icons'
import boardsmashPreview from '../../assets/boardsmash-preview.png'
import doMathPreview from '../../assets/doMath-preview.png'
import ArrowIcon from "../../components/ArrowIcon"

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin-bottom: 5rem;
`

const Project = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2.5rem;
    align-items: center;
`

const LeftTextSection = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const RightTextSection = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const ProjectTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
`
const ProjectInfo = styled.p`
    font-size:1.5rem;
    width: 20rem;
    margin-bottom: 1.5rem;
`
const ProjectLink = styled.a`
    color: ${colors.fontBlack};
    padding: .5rem 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
    border-radius: 0.5rem;
    border: 2px solid ${colors.fontBlack};
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    transition: 150ms;

    &:hover{
        background-color: ${colors.fontBlack};
        color: ${colors.background};
    }
`

const ProjectsSection = React.forwardRef((props, projectsRef) => {
    return(
        <ProjectsWrapper>
            <ArrowIcon ref={projectsRef}/>
            <Project>
                <LeftTextSection>
                    <ProjectTitle>doMath</ProjectTitle>
                    <ProjectInfo>Make your brain sweat it out with a fun math game</ProjectInfo>
                    <ProjectLink href="https://domath.surajthotakura.com" target="_blank" rel="noreferrer noopener">
                        Solve 
                        <ArrowForward28Filled/>
                    </ProjectLink>
                </LeftTextSection>
                <img src={doMathPreview}/>
            </Project>

            <Project>
                <img src={boardsmashPreview}/>
                <RightTextSection>
                    <ProjectTitle>Board Smash </ProjectTitle>
                    <ProjectInfo>Brace yourselves and <br/> click-clack!<br/> Test your typing speed on this Monkeytype clone</ProjectInfo>
                    <ProjectLink href="https://boardsmash.surajthotakura.com" target="_blank" rel="noreferrer noopener">
                        Smash 
                        <ArrowForward28Filled/>
                    </ProjectLink>
                </RightTextSection>
            </Project>
            <ArrowIcon/>
        </ProjectsWrapper>
    )
})

export default ProjectsSection