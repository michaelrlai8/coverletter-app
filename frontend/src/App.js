import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: white;
  color: #989898;
  height: 60px;
  border-bottom: 1px solid lightgrey;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 20px;
  height: 100%;
  max-width: 1250px;
  margin: 0 auto;
`;

const List = styled.ul`
  display: flex;
  gap: 10px;
`;

const ListItem = styled.li`
  list-style: none;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: black;
  font-weight: 700;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  height: 100%;
  display: flex;
  align-items: center;

  padding: 10px;

  &.active {
    color: #4c4c4c;
  }

  &:hover {
    color: black;
  }
`;

const App = () => {
  return (
    <div>
      <Nav>
        <Container>
          <HomeLink to='/'>TurboCover</HomeLink>
          <List>
            <ListItem>
              <StyledLink to='/'>Home</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to='/about'>About</StyledLink>
            </ListItem>
          </List>
        </Container>
      </Nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
