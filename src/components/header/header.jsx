import { Open20Filled } from "@fluentui/react-icons";
import styled from "styled-components";
import surajThotakuraIcon from "../../assets/suraj-thotakura-logo.svg";
import { colors } from "../../constants";

const AccentText = styled.span`
  color: ${colors.accent};
  font-size: 1.25rem;
  line-height: 1.5rem;
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

const HeaderListLeft = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 3rem;
  align-items: center;
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

const Logo = styled.li`
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

const Header = (props) => {
  return (
    <header>
      <NavBar>
        <HeaderListLeft>
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
          <ListItem
            onClick={() =>
              props.aboutRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            About<AccentText accentSize={"1rem"}>.</AccentText>Me
          </ListItem>
          <ListItem
            onClick={() =>
              props.projectsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            Work<AccentText accentSize={"1rem"}>+</AccentText>Play
          </ListItem>
          <ListItem
            onClick={() =>
              props.connectRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            Connect<AccentText accentSize={"1rem"}>.</AccentText>
          </ListItem>
        </HeaderListLeft>
        <HeaderListRight>
          <PondButton>
            Pond
            <Open20Filled color={colors.accent} />
          </PondButton>
        </HeaderListRight>
      </NavBar>
    </header>
  );
};

export default Header;
