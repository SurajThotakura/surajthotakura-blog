import styled from "styled-components"

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 48rem;
    gap: 5rem;
`

const Intro = styled.div`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.5rem;
`

const About = () => {
    return(
        <StyledSection>
            <Intro>
                I am a product designer at Webex (Cisco), with a background in UI/UX design and front-end web development. I love to create meaningful experiences through design and creative thinking.
            </Intro>
            <div>Polygons</div>
            <div>
                <div>Work Ex</div>
                <div>Education</div>
            </div>
        </StyledSection>
    )
}

export default About