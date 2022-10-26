import styled from "styled-components"

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const StyledHeading = styled.h1`
    font-size: 2rem;
    font-weight: 700;
`

const Footer = () => {
    return(
        <StyledFooter>
            <StyledHeading>Find me on</StyledHeading>
            <div>Polygon Pond</div>
        </StyledFooter>
    )
}

export default Footer