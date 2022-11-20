import React from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import { ArrowForward28Filled } from "@fluentui/react-icons";
import noStrike from "../../assets/Work+Play/noStriked.svg";
import boardsmashPreview from "../../assets/Work+Play/boardsmash-preview.png";
import doMathPreview from "../../assets/Work+Play/doMath-preview.png";
import keyboardsPreview from "../../assets/Work+Play/keyboards-preview.png";

const AccentText = styled.span`
  color: ${colors.accent};
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  margin-bottom: 5rem;
`;

const ProjectsHeading = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2.5rem;
  line-height: 3.125rem;
`;
const Project = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.5rem;
  align-items: center;
`;

const LeftTextSection = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const RightTextSection = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const ProjectInfo = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  width: 20rem;
  margin-bottom: 1.5rem;
`;
const ProjectLink = styled.a`
  color: ${colors.fontBlack};
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  border-radius: 0.5rem;
  border: 2px solid ${colors.fontBlack};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: 150ms;

  &:hover {
    cursor: pointer;
    background-color: ${colors.fontBlack};
    color: ${colors.background};
  }
`;

const ProjectsSection = () => {
  return (
    <ProjectsWrapper>
      <ProjectsHeading>
        All Work and
        <img src={noStrike} alt="no" />
        Play<AccentText>.</AccentText>
      </ProjectsHeading>
      <Project>
        <LeftTextSection>
          <ProjectTitle>doMath</ProjectTitle>
          <ProjectInfo>
            Make your brain sweat it out with a fun math game
          </ProjectInfo>
          <ProjectLink
            href="https://domath.surajthotakura.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Solve
            <ArrowForward28Filled />
          </ProjectLink>
        </LeftTextSection>
        <img src={doMathPreview} alt="doMath Website Preview" />
      </Project>

      <Project>
        <img src={boardsmashPreview} alt="Boardsmash Website Preview" />
        <RightTextSection>
          <ProjectTitle>Board Smash </ProjectTitle>
          <ProjectInfo>
            Brace yourselves and <br /> click-clack!
            <br /> Test your typing speed on this Monkeytype clone
          </ProjectInfo>
          <ProjectLink
            href="https://boardsmash.surajthotakura.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Smash
            <ArrowForward28Filled />
          </ProjectLink>
        </RightTextSection>
      </Project>

      <Project>
        <LeftTextSection>
          <ProjectTitle>Keyboards</ProjectTitle>
          <ProjectInfo>The clicks and clacks I love</ProjectInfo>
          <ProjectLink>
            Read More
            <ArrowForward28Filled />
          </ProjectLink>
        </LeftTextSection>
        <img src={keyboardsPreview} alt="Keyboards Case Study Preview" />
      </Project>
    </ProjectsWrapper>
  );
};

export default ProjectsSection;
