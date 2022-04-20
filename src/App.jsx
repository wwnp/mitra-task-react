import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Burger } from './components/Burger';
import { Drawer } from './components/Drawer';
import { SET_MENU_SAGA } from "./redux/constants";
import { Link } from 'react-router-dom';

function App({ children }) {
  const menu = useSelector(state => state?.mainpage.menu)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Navbar bg="light">
        <Container>
          <Link className="navbar-brand" to='/mitra-task-react'>Mitra Gallery</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Burger
                color="black" size="32px"
                onClick={() => dispatch({ type: SET_MENU_SAGA, payload: !menu })}
              >
              </Burger>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Drawer></Drawer>
      {children}
    </div>
  );
}

export default App;