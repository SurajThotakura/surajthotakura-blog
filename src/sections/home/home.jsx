import { Fragment } from "react"
import styled from "styled-components"
import { colors } from "../../constants"
import surajPhoto from '../../assets/suraj-photo.png'

const HeroBanner = styled.div`
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
const HomeSection = () => {
    return(
        <Fragment>
            <HeroBanner>
                <img src={surajPhoto} alt="Suraj's Photo"/>
                <HeroText>
                    Heyoo,<br/> I’m 
                    <AccentText> Suraj Thotakura</AccentText>
                </HeroText>
            </HeroBanner>
        </Fragment>
    )
}

export default HomeSection