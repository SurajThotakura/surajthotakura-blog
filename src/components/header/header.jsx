import styled from "styled-components";
import surajThotakuraIcon from "../../assets/suraj-thotakura-logo.svg";

const NavBar = styled.nav`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
  backdrop-filter: blur(16px);
  background-color: #faf8f6bb;
  user-select: none;
`;

const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  align-items: center;
`;

const ListItem = styled.li`
  font-size: 1.5rem;
  line-height: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.li`
  height: 3rem;
  width: 3rem;
  &:hover {
    cursor: pointer;
  }
`;

const Header = (props) => {
  return (
    <header>
      <NavBar>
        <HeaderList>
          <ListItem
            onClick={() => {
              props.homeRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Home
          </ListItem>
          <ListItem
            onClick={() =>
              props.aboutRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            About Me
          </ListItem>
          <Logo>
            <a href="https://www.surajthotakura.com/">
              <img src={surajThotakuraIcon} alt="surajThotakuraIcon" />
            </a>
          </Logo>
          <ListItem
            onClick={() =>
              props.projectsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            Projects
          </ListItem>
          <ListItem
            onClick={() =>
              props.connectRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            Connect
          </ListItem>
        </HeaderList>
      </NavBar>
    </header>
  );
};

export default Header;
