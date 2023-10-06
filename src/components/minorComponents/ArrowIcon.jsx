import { ArrowCurveDownLeft28Filled } from "@fluentui/react-icons";
import React, { Fragment } from "react";
import styled from "styled-components";
import { colors } from "../../constants";

const ArrowIconRotate = styled.div`
  color: ${colors.fontBlack};
`;
const SpacerTop = styled.div`
  height: 6rem;
`;
const SpacerBottom = styled.div`
  height: 6rem;
`;
const ArrowIcon = React.forwardRef((props, ref) => {
  return (
    <Fragment>
      <SpacerTop ref={ref} />
      <ArrowIconRotate>
        <ArrowCurveDownLeft28Filled />
      </ArrowIconRotate>
      <SpacerBottom />
    </Fragment>
  );
});

export default ArrowIcon;
