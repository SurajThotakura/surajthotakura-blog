import React from "react"
import { Fragment } from "react"
import styled from "styled-components"
import { colors } from "../../constants"
import surajPhoto from '../../assets/suraj-photo.png'

const HeroBanner = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
`

const HeroText = styled.h1`
    font-size: 4rem;
    width: 22.5rem;
`
const AccentText = styled.span`
    color: ${colors.accent};
`

const IntroWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
`
const IntroText = styled.h2`
    font-size: 2.5rem;
`
const HomeSection = React.forwardRef((props, aboutRef) => {
    return(
        <Fragment>
            <HeroBanner>
                <img src={surajPhoto} alt="Suraj's Photo"/>
                <HeroText>
                    Heyoo,<br/> I’m 
                    <AccentText> Suraj Thotakura</AccentText>
                </HeroText>
            </HeroBanner>
            <IntroWrapper ref={aboutRef}>
                <IntroText>
                    Designer
                    <AccentText>.</AccentText>
                </IntroText>
                <IntroText>
                    Developer
                    <AccentText>.</AccentText>
                </IntroText>
                <IntroText>
                    Human
                    <AccentText>.</AccentText>
                </IntroText>
            </IntroWrapper>
        </Fragment>
    )
})

export default HomeSection