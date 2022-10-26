import styled from "styled-components"

const NavBar = styled.nav`
    padding: 2rem;
    display: flex;
    justify-content: center;
`

const HeaderList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 4rem;
`

const ListItem = styled.li`
    font-size: 1.5rem;

    &:hover {
        cursor: pointer;
    }
`

const Header = () => {
    return(
        <header>
            <NavBar>
                <HeaderList>
                    <ListItem>Home</ListItem>
                    <ListItem>About Me</ListItem>
                    <ListItem>Projects</ListItem>
                    <ListItem>Connect</ListItem>
                </HeaderList>
            </NavBar>
        </header>
    )
}

export default Header