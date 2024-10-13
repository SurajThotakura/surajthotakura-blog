import React from "react";
import styled from "styled-components";
import linkedin from "/assets/linkedin.svg";
import dribbble from "/assets/dribbble.svg";
import github from "/assets/github.svg";
import codepen from "/assets/codepen.svg";
import { colors, mobileBreakPoint } from "../../constants";

const AccentText = styled.span`
  color: ${colors.accent};
`;

const StyledFooter = styled.footer`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
`;
const StyledHeading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 1.25rem;
  }
`;
const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  @media (max-width: ${mobileBreakPoint}) {
    gap: 2.5rem;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <StyledHeading>
        Also<AccentText>,</AccentText> you can find me on
      </StyledHeading>
      <IconsWrapper>
        <a
          href="https://www.linkedin.com/in/surajthotakura007/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={linkedin} alt="Linkedin Icon" />
        </a>
        <a
          href="https://github.com/SurajThotakura"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={github} alt="GitHub Icon" />
        </a>
        <a
          href="https://dribbble.com/surajsatya007"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={dribbble} alt="Dribbble Icon" />
        </a>
        <a
          href="https://codepen.io/suraj-thotakura"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={codepen} alt="Codepen Icon" />
        </a>
      </IconsWrapper>
    </StyledFooter>
  );
};

export default Footer;
