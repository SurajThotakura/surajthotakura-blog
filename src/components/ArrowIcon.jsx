import { ArrowCurveDownLeft28Filled } from '@fluentui/react-icons'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants'

const ArrowIconRotate = styled.div`
    color: ${colors.fontBlack};
`

const ArrowIcon = React.forwardRef((props, ref) => {
    return(
        <ArrowIconRotate ref={ref}>
            <ArrowCurveDownLeft28Filled/>
        </ArrowIconRotate>
    )
})

export default ArrowIcon