import VisitorMenu from 'components/UserMenu/UserMenu';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Link, NavLink } from 'react-router-dom';

const SiteHeader = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="text-primary" as={Link} to="register">
          Visitor list
        </Navbar.Brand>
        <Nav>
          {!isLoggedIn && (
            <>
              <Nav.Link as={NavLink} to="register" key="register">
                Sign Up
              </Nav.Link>
              <Nav.Link as={NavLink} to="login" key="login">
                Login
              </Nav.Link>
            </>
          )}
        </Nav>
        {isLoggedIn && <VisitorMenu />}
      </Container>
    </Navbar>
  );
};
export default SiteHeader;
