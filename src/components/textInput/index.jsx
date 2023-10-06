import React from "react";
import styled from "styled-components";
import { colors } from "../../constants";

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;
const StyledLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 300;
`;
const StyledInput = styled.input`
  font-family: "Lexend", Helvetica, Arial, sans-serif;
  padding: 0 1rem;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-size: 1.5rem;
  font-weight: 400;
  border: 2px solid ${colors.lightGrey};
  background-color: ${colors.background};
  border-radius: 0.5rem;
  margin-bottom: 2.5rem;

  &:active {
    border-color: ${colors.fontBlack};
  }
`;

const TextInput = React.forwardRef(
  ({ label, height = "3rem", width = "30rem" }, ref) => {
    return (
      <TextInputWrapper>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput type="text" height={height} width={width} ref={ref} />
      </TextInputWrapper>
    );
  }
);

export default TextInput;
