import { ArrowDownload24Filled, Open20Filled } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import resume from "/assets/about/resume.pdf";
import surajThotakuraIcon from "/assets/suraj-thotakura-logo.svg";
import { colors, mobileBreakPoint } from "../../constants";
import { useState } from "react";

const AccentText = styled.span`
  color: ${colors.accent};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
`;

const NavBar = styled.nav`
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: flex-start;
  position: fixed;
  z-index: 2;
  top: 0;
  gap: 2rem;
  width: calc(100% - 5rem);
  backdrop-filter: blur(16px);
  background-color: #faf8f6bb;
  user-select: none;
  @media (max-width: ${mobileBreakPoint}) {
    width: calc(100% - 3rem);
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
    user-select: none;
  }
`;

const HeaderListMiddle = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 3rem;
  align-items: center;
  @media (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
  }
`;

const HeaderListRight = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const ListItem = styled.li`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.ul`
  height: 2rem;
  width: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

const LogoImage = styled.img`
  height: 2rem;
  width: 2rem;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.fontBlack};

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const ResumeLink = styled.a`
  text-decoration: none;
  color: ${colors.fontBlack};

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const MenuSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${mobileBreakPoint}) {
    display: ${(props) => (props.menuOpen ? "flex" : "none")};
    flex-direction: column;
    height: 100vh;
    gap: 2rem;
    padding: 2.5rem 0;
  }
`;

const BurgerButton = styled.button`
  display: none;
  @media (max-width: ${mobileBreakPoint}) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.fontBlack};
    height: 2rem;
    width: 2rem;
    border: none;
    background-color: transparent;
    border-radius: 0.5rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
const Burger = styled.span`
  position: relative;
  background-color: ${(props) =>
    props.clicked ? "transparent" : colors.fontBlack};
  width: 1rem;
  height: 2px;
  display: inline-block;
  border-radius: 0.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: ${colors.fontBlack};
    width: 1rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    border-radius: 0.5rem;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.4rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.4rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => setMenuOpen(!menuOpen);
  return (
    <header>
      <NavBar>
        <Logo
          onClick={() => {
            props.homeRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <LogoImage src={surajThotakuraIcon} alt="surajThotakuraIcon" />
        </Logo>
        <MenuSection menuOpen={menuOpen}>
          <HeaderListMiddle>
            <ListItem
              onClick={() => {
                handleMenuOpen();
                return props.aboutRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              About<AccentText accentSize={"1rem"}>.</AccentText>Me
            </ListItem>
            <ListItem
              onClick={() => {
                handleMenuOpen();
                return props.projectsRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Work<AccentText accentSize={"1rem"}>+</AccentText>Play
            </ListItem>
            <ListItem
              onClick={() => {
                handleMenuOpen();
                return props.connectRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Connect<AccentText accentSize={"1rem"}>↗</AccentText>
            </ListItem>
            <ListItem>
              <ResumeLink
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
              >
                Resume
              </ResumeLink>
              <AccentText accentSize={"1rem"}>↯</AccentText>
            </ListItem>
          </HeaderListMiddle>
          <HeaderListRight>
            <StyledLink to="/pond">
              <PondButton>
                Pond
                <Open20Filled color={colors.accent} />
              </PondButton>
            </StyledLink>
          </HeaderListRight>
        </MenuSection>
        <BurgerButton onClick={handleMenuOpen}>
          <Burger clicked={menuOpen} />
        </BurgerButton>
      </NavBar>
    </header>
  );
};

export default Header;
