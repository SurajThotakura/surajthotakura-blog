import styled from "styled-components";
import { PolygonPond } from "../../components/polygonPond";
import { colors } from "../../constants";
import { ArrowLeft16Filled } from "@fluentui/react-icons";
import { Link } from "react-router-dom";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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
`;
const NavBar = styled.nav`
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  top: 0;
  width: calc(100% - 5rem);
  backdrop-filter: blur(16px);
  background-color: #faf8f6bb;
  user-select: none;
`;
const PondButton = styled.li`
  padding: 0.25rem 0.5rem;
  box-shadow: inset 0 0 0 2px ${colors.accent};
  background-color: ${colors.offWhite};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${colors.lightBlue};
    transition: 0.2s;
  }
  &:active {
    background-color: ${colors.offWhite};
    transition: 0.1s;
  }
`;
const InProgress = () => {
  return (
    <>
      <header>
        <NavBar>
          <Link to="/" style={{textDecoration:"none", color:colors.fontBlack}}>
          <PondButton><ArrowLeft16Filled/> Home</PondButton>
          </Link>
        </NavBar>
      </header>
      <Main>
        <PolygonPond>
          <HeroBanner>
            <HeroText>Blog In Progress</HeroText>
          </HeroBanner>
        </PolygonPond>
      </Main>
    </>
  );
};

export default InProgress;
