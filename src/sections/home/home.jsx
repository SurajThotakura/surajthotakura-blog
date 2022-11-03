import React from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import surajPhoto from "../../assets/suraj-photo.png";
import PolygonPond from "../../components/polygonPond/polygonPond";

const HeroBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  user-select: none;
`;

const HeroText = styled.h1`
  font-size: 4rem;
  width: 22.5rem;
`;
const AccentText = styled.span`
  color: ${colors.accent};
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  user-select: none;
`;
const IntroText = styled.h2`
  font-size: 2.5rem;
`;
const HomeSection = React.forwardRef((props, aboutRef) => {
  return (
    <PolygonPond>
      <HeroBanner>
        <img src={surajPhoto} alt="Suraj's Photo" />
        <HeroText>
          Heyoo,
          <br /> I’m
          <AccentText> Suraj Thotakura</AccentText>
        </HeroText>
      </HeroBanner>
      <IntroWrapper>
        <IntroText>
          Designer
          <AccentText>.</AccentText>
        </IntroText>
        <IntroText>
          Developer
          <AccentText>.</AccentText>
        </IntroText>
        <IntroText>
          Human
          <AccentText>.</AccentText>
        </IntroText>
      </IntroWrapper>
    </PolygonPond>
  );
});

export default HomeSection;
