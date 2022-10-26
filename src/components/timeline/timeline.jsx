import { Fragment } from "react"
import styled from "styled-components"

const Title = styled.h2`
    font-size: 2rem;
    text-align: right;
    max-width: 11.25rem;
`

const Timeline = ({
    title
}) => {
    return(
        <Fragment>
            <Title>
                {title}
            </Title>
        </Fragment>
    )
}