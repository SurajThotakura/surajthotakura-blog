import React from "react";
import styled from "styled-components";
import Timeline from "../../components/timeline/timeline";
import StoryBlock from "../../components/storyBlock/storyBlock";
import robot from "../../assets/about/robot.svg";
import PSP from "../../assets/about/PSP.svg";
import atmos from "../../assets/about/atmos.svg";
import college from "../../assets/about/college.svg";
import theMakings from "../../assets/about/theMakings.svg";
import resume from "../../assets/about/Suraj Resume 2022.pdf";
import { Fragment } from "react";
import HeartBeat from "../../components/heartBeat";
import { colors } from "../../constants";
import { ArrowDownload24Filled } from "@fluentui/react-icons";

const AccentText = styled.span`
  color: ${colors.accent};
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2.5rem;
  gap: 7rem;
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
      institute: "Webex (Cisco)",
      qualification: "Product Designer",
      from: 2020,
      to: "Present",
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
              Now, I build websites, design systems, conduct user interviews and
              of course, design and code every single day.
              <br />I believe all I want to do is bring ideas to life with{" "}
              <b>
                design<AccentText>+</AccentText>code<AccentText>.</AccentText>
              </b>
              <LastLine>
                So here I am,{" "}
                <b>
                  Designer<AccentText>.</AccentText> Developer
                  <AccentText>.</AccentText> Human<AccentText>.</AccentText>
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
          <img src={theMakings} alt="#The-Makings" />
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
