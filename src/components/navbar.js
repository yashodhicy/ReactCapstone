import { Button, Nav, Navbar } from "react-bootstrap"
import { IoIosArrowBack, IoIosMic, IoIosSettings} from 'react-icons/io';
import './navbar.css'
import { Link } from "react-router-dom";
 
const Navigation = ()=> {
  return (
    <Navbar>
        <Nav.Link as={Link} to="/"> <IoIosArrowBack fill='white'/> </Nav.Link>
        
        <IoIosMic fill="white"/>
        <IoIosSettings fill="white"/>
    </Navbar>
    
  )
 }

 export default Navigation;