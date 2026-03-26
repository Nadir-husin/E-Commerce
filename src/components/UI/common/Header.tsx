import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';



import {Badge} from 'react-bootstrap'
import { ShoppingCart } from 'lucide-react';


function Header() {
  return (
    <div className='shadow-2xl shadow-gray-500/80' >
     <Navbar expand="lg" className="bg-body-tertiary py-3" bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">NH <Badge bg='info'>Ecom</Badge></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="category">Categories</Nav.Link>
            <Nav.Link as={NavLink} to="about-us">About</Nav.Link>
          </Nav>

            <Nav className='gap-3'>
            <Nav.Link as={NavLink} to="login">Login</Nav.Link>
            <Nav.Link as={NavLink} to="register">Sign Up</Nav.Link>
            <div className='self-center text-white mx-2 relative cursor-pointer'>
                <ShoppingCart size={29}/>
                <div className='absolute w-5 h-5 bg-blue-300 rounded-full -top-3 left-2'></div>
            </div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
