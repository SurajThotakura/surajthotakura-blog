import React from "react";
import styled from "styled-components";
import { colors, mobileBreakPoint } from "../../../../constants";
import { ArrowForward28Filled } from "@fluentui/react-icons";
import noStrike from "/assets/Work+Play/noStriked.svg";
import boardsmashPreview from "/assets/Work+Play/boardsmash-preview.png";
import doMathPreview from "/assets/Work+Play/doMath-preview.png";
import keyboardsPreview from "/assets/Work+Play/keyboards-preview.png";
import boringoPreview from "/assets/Work+Play/boringo-preview.jpeg";
import multiLayerVideoPreview from "/assets/Work+Play/multiLayerVideo-preview.png";
import jsIcon from "/assets/Work+Play/javascript.svg";
import reactIcon from "/assets/Work+Play/React-icon.svg";
import tailwindIcon from "/assets/Work+Play/tailwind.svg";
import xStateIcon from "/assets/Work+Play/xstate.svg";
import gitIcon from "/assets/Work+Play/github.svg";
import { Link } from "react-router-dom";

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
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 1.25rem;
  }
`;
const Project = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "right" ? "row" : "row-reverse"};
  justify-content: center;
  gap: 2.5rem;
  align-items: center;
  @media (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
  }
`;

const LeftTextSection = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: ${mobileBreakPoint}) {
    align-items: flex-start;
    margin-left: 2rem;
    text-align: left;
  }
`;
const RightTextSection = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: ${mobileBreakPoint}) {
    margin-left: 2rem;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 1.5rem;
  }
`;
const ProjectInfo = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  width: 20rem;
  margin-bottom: 1.5rem;
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 1rem;
    width: calc(100vw - 2rem);
  }
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

const BlogLink = styled.div`
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
const ProjectImage = styled.img`
  border-radius: 24px;
  @media (max-width: ${mobileBreakPoint}) {
    border-radius: 12px;
    width: calc(100vw - 2rem);
  }
`;
const GitLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.fontBlack};
  height: 3rem;
  width: 3rem;
  border: 2px solid ${colors.fontBlack};
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: ${colors.fontBlack};
  }
`;
const GitIcon = styled.img`
  height: 2rem;
  width: 2rem;
  padding: 0.5rem;
  border: 2px solid transparent;
  &:hover {
    filter: brightness(0.05) invert(1);
  }
`;
const TechIcon = styled.img`
  height: 2rem;
  width: 2rem;
`;
const Group = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ProjectsSection = () => {
  return (
    <ProjectsWrapper>
      <ProjectsHeading>
        All Work and
        <img src={noStrike} alt="no" />
        Play<AccentText>.</AccentText>
      </ProjectsHeading>

      <Project direction="right">
        <ProjectImage
          style={{ border: "4px solid #AB9DFF44", borderRadius: 24 }}
          src={multiLayerVideoPreview}
          alt="multiLayerVideo Preview"
        />
        <RightTextSection>
          <Group>
            <TechIcon src={reactIcon} alt="React Icon" />
            <TechIcon
              style={{ width: "4rem" }}
              src={xStateIcon}
              alt="XState Icon"
            />
          </Group>
          <ProjectTitle>Multi-Layered Videos</ProjectTitle>
          <ProjectInfo>
            Novel video delivery architecture to enhance user experience
          </ProjectInfo>
          <ProjectLink
            href="https://www.tdcommons.org/dpubs_series/7246/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Read More
            <ArrowForward28Filled />
          </ProjectLink>
        </RightTextSection>
      </Project>

      <Project direction="left">
        <ProjectImage src={boringoPreview} alt="Boringo Website Preview" />
        <LeftTextSection>
          <Group>
            <TechIcon src={reactIcon} alt="React Icon" />
            <TechIcon src={tailwindIcon} alt="Tailwind Icon" />
          </Group>
          <ProjectTitle>Boringo!</ProjectTitle>
          <ProjectInfo>
            Bored of life?
            <br />
            Make a game out of it!
          </ProjectInfo>
          <Group>
            <ProjectLink
              href="https://boringo.surajthotakura.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Play
              <ArrowForward28Filled />
            </ProjectLink>
            <GitLink
              href="https://github.com/SurajThotakura/Boringo"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitIcon src={gitIcon} alt="GitHub Icon" />
            </GitLink>
          </Group>
        </LeftTextSection>
      </Project>

      <Project direction="right">
        <ProjectImage
          src={boardsmashPreview}
          alt="Boardsmash Website Preview"
        />
        <RightTextSection>
          <Group>
            <TechIcon src={jsIcon} alt="JavaScript Icon" />
          </Group>
          <ProjectTitle>Board Smash </ProjectTitle>
          <ProjectInfo>
            Brace yourselves and <br /> click-clack!
            <br /> Test your typing speed on this typing test game.
          </ProjectInfo>
          <Group>
            <ProjectLink
              href="https://boardsmash.surajthotakura.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Smash
              <ArrowForward28Filled />
            </ProjectLink>
            <GitLink
              href="https://github.com/SurajThotakura/boardsmash-js"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitIcon src={gitIcon} alt="GitHub Icon" />
            </GitLink>
          </Group>
        </RightTextSection>
      </Project>

      <Project direction="left">
        <ProjectImage src={doMathPreview} alt="doMath Website Preview" />
        <LeftTextSection>
          <Group>
            <TechIcon src={reactIcon} alt="React Icon" />
          </Group>
          <ProjectTitle>doMath</ProjectTitle>
          <ProjectInfo>
            Make your brain sweat it out with a fun math game
          </ProjectInfo>
          <Group>
            <ProjectLink
              href="https://domath.surajthotakura.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Solve
              <ArrowForward28Filled />
            </ProjectLink>
            <GitLink
              href="https://github.com/SurajThotakura/doMATH"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitIcon src={gitIcon} alt="GitHub Icon" />
            </GitLink>
          </Group>
        </LeftTextSection>
      </Project>

      <Project direction="right">
        <ProjectImage
          src={keyboardsPreview}
          alt="Keyboards Case Study Preview"
        />
        <RightTextSection>
          <ProjectTitle>Keyboards</ProjectTitle>
          <ProjectInfo>The clicks and clacks I love</ProjectInfo>
          <Link to="/inProgress" style={{ textDecoration: "none" }}>
            <BlogLink>
              Read More
              <ArrowForward28Filled />
            </BlogLink>
          </Link>
        </RightTextSection>
      </Project>
    </ProjectsWrapper>
  );
};

export default ProjectsSection;
