import React from "react"
import styled from "styled-components"
import Timeline from "../../components/timeline/timeline"
import skills from "../../assets/skills.svg"
import { Fragment } from "react"


const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 48rem;
    gap: 5rem;
`

const Intro = styled.div`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.5rem;
`

const QualificationsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
`

const education ={
    title: "Education",
    info: [
        {
            institute: "BITS, Pilani Hyderabad",
            qualification: "B.E. Mechanical Engineering",
            from: 2016,
            to:"Present"
        },
        {
            institute: "Sri Chaitanya Jr Kalasala",
            qualification: "Telangana State Board of Intermediate, MPC",
            from: 2015,
            to:2016
        }
    ]
}

const workExperience ={
    title: "Work Experience",
    info: [
        {
            institute: "Webex (Cisco)",
            qualification: "Product Designer",
            from: 2020,
            to:"Present"
        },
        {
            institute: "IMI Mobile",
            qualification: "UI/UX Design Intern",
            from: 2019,
            to:2020
        },
    ]
}

const About = ()=> {
    return(
        <Fragment>
            <StyledSection>
                <Intro>
                    I am a product designer at Webex (Cisco), with a background in UI/UX design and front-end web development. I love to create meaningful experiences through design and creative thinking.
                </Intro>
                <img src={skills}/>
                <QualificationsWrapper>
                    <Timeline
                        title = {workExperience.title}
                        infoArray = {workExperience.info}
                    />
                    <Timeline
                        title = {education.title}
                        infoArray = {education.info}
                    />
                </QualificationsWrapper>
            </StyledSection>
        </Fragment>
    )
}

export default About