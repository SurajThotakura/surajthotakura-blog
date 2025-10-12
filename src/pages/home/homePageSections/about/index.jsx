import React from "react";
import styled from "styled-components";
import Timeline from "../../../../components/timeline";
import StoryBlock from "../../../../components/storyBlock";
import robot from "/assets/about/robot.svg";
import PSP from "/assets/about/PSP.svg";
import atmos from "/assets/about/atmos.svg";
import college from "/assets/about/college.svg";
import theMakings from "/assets/about/theMakings.svg";
import resume from "/assets/about/resume.pdf";
import HeartBeat from "../../../../components/minorComponents/heartBeat";
import { Fragment } from "react";
import { colors, mobileBreakPoint } from "../../../../constants";
import { ArrowDownload24Filled } from "@fluentui/react-icons";

const AccentText = styled.span`
  color: ${colors.accent};
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2.5rem;
  gap: 7rem;
  @media (max-width: ${mobileBreakPoint}) {
    padding: 0;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6rem;
`;

const IntroHero = styled.div`
  font-size: 2.5rem;
  line-height: 4rem;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 1.5rem;
    flex-direction: column;
    line-height: 2.5rem;
    gap: 0.5rem;
  }
`;

const IntroHeroLine = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: ${(props) => (props.gap ? props.gap : 0)};
`;

const IntroContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const IntroEnd = styled.span`
  margin-top: 6rem;
  width: 40rem;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 2rem;
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 1rem;
    width: calc(100vw - 2rem);
    flex-direction: column;
    line-height: 1.5rem;
    gap: 0.5rem;
  }
`;

const LastLine = styled.p`
  margin-top: 1rem;
`;

const QualificationsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6rem;
`;

const TimelieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

const DownloadResume = styled.a`
  color: ${colors.fontBlack};
  padding: 0.5rem 1rem;
  margin: auto;
  width: 16rem;
  font-size: 1.5rem;
  line-height: 2rem;
  border-radius: 0.5rem;
  border: 2px solid ${colors.fontBlack};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: 150ms;

  &:hover {
    cursor: pointer;
    background-color: ${colors.fontBlack};
    color: ${colors.background};
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 12rem;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
  }
`;

const TheMakings = styled.img`
  display: block;
  @media (max-width: ${mobileBreakPoint}) {
    display: none;
  }
`;

const education = {
  title: "Education",
  info: [
    {
      institute: "BITS, Pilani Hyderabad",
      qualification: "B.E. Mechanical Engineering",
      from: 2016,
      to: "Present",
    },
    {
      institute: "Sri Chaitanya Jr Kalasala",
      qualification: "Telangana State Board of Intermediate, MPC",
      from: 2015,
      to: 2016,
    },
  ],
};

const workExperience = {
  title: "Work Experience",
  info: [
    {
      institute: "Cisco",
      qualification: "Product Manager",
      from: 2024,
      to: "Present",
    },
    {
      institute: "Cisco",
      qualification: "Software Engineer",
      from: 2023,
      to: 2024,
    },
    {
      institute: "Cisco",
      qualification: "Product Designer",
      from: 2020,
      to: 2023,
    },
    {
      institute: "IMI Mobile",
      qualification: "UI/UX Design Intern",
      from: 2019,
      to: 2020,
    },
  ],
};

const storyLine = [
  {
    src: robot,
    alt: "cardboard robot",
  },
  {
    src: PSP,
    alt: "PSP and PC with 256MB RAM",
  },
  {
    src: atmos,
    alt: "Atmos website",
  },
  {
    src: college,
    alt: "Suraj in his college",
  },
];

const About = () => {
  return (
    <Fragment>
      <StyledSection>
        <Intro>
          <IntroHero>
            <IntroHeroLine>
              About me<AccentText>?</AccentText>
            </IntroHeroLine>
            <IntroHeroLine>
              What can I say <AccentText>,</AccentText>
            </IntroHeroLine>
            <IntroHeroLine gap={"1rem"}>
              I just love <HeartBeat />
            </IntroHeroLine>
            <IntroHeroLine>
              building things<AccentText>.</AccentText>
            </IntroHeroLine>
          </IntroHero>
          <IntroContent>
            <StoryBlock storyLine={storyLine} />
            <IntroEnd>
              Now, I’m a product manager at Webex, working on AI Agent
              integrations and voice experiences. With a background in design
              and engineering, I'm always hands-on with both design and code. My
              work spans all corners of product development, while collaborating
              with diverse teams and stakeholders.
              <LastLine>
                At the heart of it, I’m still doing what I love—bringing ideas
                to life through{" "}
                <b>
                  design<AccentText>+</AccentText>code<AccentText>.</AccentText>
                </b>
              </LastLine>
            </IntroEnd>
          </IntroContent>
        </Intro>
        <QualificationsWrapper>
          <TimelieWrapper>
            <Timeline
              title={workExperience.title}
              infoArray={workExperience.info}
            />
            <Timeline title={education.title} infoArray={education.info} />
          </TimelieWrapper>
          <TheMakings src={theMakings} alt="#The-Makings" />
        </QualificationsWrapper>
        <DownloadResume href={resume} target="_blank" rel="noreferrer noopener">
          Download Resume
          <ArrowDownload24Filled />
        </DownloadResume>
      </StyledSection>
    </Fragment>
  );
};

export default About;
