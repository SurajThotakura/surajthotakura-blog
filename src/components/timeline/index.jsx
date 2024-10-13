import { Fragment } from "react";
import styled from "styled-components";
import { colors, mobileBreakPoint } from "../../constants";

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

// Left Half
const Title = styled.h2`
  font-size: 2rem;
  text-align: right;
  width: 11.25rem;
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 1rem;
    width: 6.5rem;
  }
`;

// Dots & Lines
const DotsAndLines = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
const Dot = styled.span`
  background-color: ${colors.lightBlue};
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`;
const Line = styled.span`
  background-color: ${colors.lightBlue};
  width: 0.25rem;
  height: 6rem;
  border-radius: 0.125rem;
  @media (max-width: ${mobileBreakPoint}) {
    height: 3.5rem;
  }
`;

// Right Half
const RightHalf = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: ${mobileBreakPoint}) {
    margin-top: 6px;
    gap: 1rem;
  }
`;
const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Institute = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 1rem;
  }
`;
const Qualification = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 1rem;
  }
`;
const TimeRange = styled.div`
  font-size: 1rem;
  color: ${colors.accent};
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 0.75rem;
  }
`;

const Timeline = ({ title, infoArray }) => {
  return (
    <TimelineWrapper>
      <Title>{title}</Title>

      <DotsAndLines>
        {infoArray.map((info, index) => {
          if (index < infoArray.length - 1) {
            return (
              <Fragment key={info.qualification}>
                <Dot />
                <Line />
              </Fragment>
            );
          } else {
            return <Dot key={info.qualification} />;
          }
        })}
      </DotsAndLines>

      <RightHalf>
        {infoArray.map((info) => {
          return (
            <TimelineItem key={info.qualification}>
              <Institute>{info.institute}</Institute>
              <Qualification>{info.qualification}</Qualification>
              <TimeRange>
                {info.from} - {info.to}
              </TimeRange>
            </TimelineItem>
          );
        })}
      </RightHalf>
    </TimelineWrapper>
  );
};

export default Timeline;
