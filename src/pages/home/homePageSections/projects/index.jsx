import React from "react";
import styled from "styled-components";
import { colors, mobileBreakPoint } from "../../../../constants";
import { ArrowForward28Filled } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import projects from "./projects.json";

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

const TextSection = styled.div`
  text-align: ${(props) => (props.align === "right" ? "right" : "left")};
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.align === "right" ? "flex-end" : "flex-start"};
  @media (max-width: ${mobileBreakPoint}) {
    align-items: flex-start;
    margin-left: 2rem;
    text-align: left;
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
        <img src="/assets/Work+Play/noStriked.svg" alt="no" />
        Play<AccentText>.</AccentText>
      </ProjectsHeading>
      {projects.map((project, index) => {
        const direction = index % 2 ? "left" : "right";
        return (
          <Project key={index} direction={direction}>
            <ProjectImage
              src={project.image}
              alt={`${project.title} Preview`}
            />
            <TextSection align={direction === "right" ? "left" : "right"}>
              <Group>
                {project.technologies.map((tech, idx) => (
                  <img key={idx} src={tech} alt="Technology Icon" width="32" />
                ))}
              </Group>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectInfo>{project.description}</ProjectInfo>
              <Group>
                {project.links.map((link, idx) => (
                  <ProjectLink
                    key={idx}
                    href={link.url}
                    target={!link.isInternal && "_blank"}
                    rel="noreferrer"
                  >
                    {link.label}
                    <ArrowForward28Filled />
                  </ProjectLink>
                ))}
              </Group>
            </TextSection>
          </Project>
        );
      })}
    </ProjectsWrapper>
  );
};

export default ProjectsSection;
