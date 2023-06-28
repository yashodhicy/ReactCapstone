import { Nav, Navbar } from 'react-bootstrap';
import { IoIosArrowBack, IoIosMic, IoIosSettings } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navigation = () => {
  const location = useLocation();
  let text = 'Home';

  if (location.pathname === '/') {
    text = 'Home';
  } else if (location.pathname.startsWith('/event/')) {
    text = 'event details';
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          <IoIosArrowBack fill="white" />
        </Nav.Link>
      </Nav>
      <Navbar.Brand className="mx-auto">
        <p className="text-center">{text}</p>
      </Navbar.Brand>
      <Nav>
        <IoIosMic fill="white" />
        <IoIosSettings fill="white" />
      </Nav>
    </Navbar>
  );
};

export default Navigation;
