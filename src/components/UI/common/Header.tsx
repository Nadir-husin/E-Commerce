import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from 'react-router-dom';
import {Badge} from 'react-bootstrap'
import { ShoppingCart } from 'lucide-react';

//react 

import { useEffect , useState } from 'react';

//redux 

import { getCartQuantitySelector } from '@store/Cart/cartSlice';
import { useAppSelector } from '@store/hooks';




function Header() {
  const [isAnimated , setIsAnimated] = useState(false)
  const totalQuantity = useAppSelector(getCartQuantitySelector)
  const animationClass = isAnimated ? 'pump-cart-quantity' : ''

  useEffect(()=>{

    if(!totalQuantity) return 
    setIsAnimated(true)
    const debounce = setTimeout(()=>{
      setIsAnimated(false)
    },200)

    return () => clearTimeout(debounce)
  },[totalQuantity])


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
            <Link to="/cart">
            <div className='self-center text-white mx-2 relative cursor-pointer pt-2'>
                <ShoppingCart size={30}/>
                <div className={` absolute w-6 h-6 text-center bg-blue-300 rounded-full -top-2 left-2  leading-6 font-bold ${animationClass}`}>{totalQuantity}</div>
            </div>
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
