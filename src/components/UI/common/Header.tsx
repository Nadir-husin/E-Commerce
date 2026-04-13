import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { ShoppingCart, ScrollText } from 'lucide-react';

// react
import { useEffect, useState } from 'react';

// redux
import { getCartQuantitySelector } from '@store/Cart/cartSlice';
import { useAppSelector } from '@store/hooks';

function Header() {
  const [isCartAnimated, setIsCartAnimated] = useState(false);
  const [isWishlistAnimated, setIsWishlistAnimated] = useState(false);

  const totalQuantity = useAppSelector(getCartQuantitySelector);
  const totalWishlistQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );

  const cartAnimationClass = isCartAnimated ? 'pump-cart-quantity' : '';
  const wishlistAnimationClass = isWishlistAnimated ? 'pump-cart-quantity' : '';

  useEffect(() => {
    if (!totalQuantity) return;

    setIsCartAnimated(true);

    const timer = setTimeout(() => {
      setIsCartAnimated(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [totalQuantity]);

  useEffect(() => {
    if (!totalWishlistQuantity) return;

    setIsWishlistAnimated(true);

    const timer = setTimeout(() => {
      setIsWishlistAnimated(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [totalWishlistQuantity]);

  return (
    <div className='shadow-2xl shadow-gray-500/80'>
      <Navbar
        expand="lg"
        className="bg-body-tertiary py-3"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            NH <Badge bg="info">Ecom</Badge>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="category">Categories</Nav.Link>
              <Nav.Link as={NavLink} to="about-us">About</Nav.Link>
            </Nav>

            <Nav className="gap-3 items-center">
              <Nav.Link as={NavLink} to="login">Login</Nav.Link>
              <Nav.Link as={NavLink} to="register">Sign Up</Nav.Link>

              <div className="flex items-center">
                <Link to="/wishlist">
                  <div className="text-white mx-2 relative cursor-pointer pt-2 flex justify-center gap-1">
                    <ScrollText size={27} />
                    <p className="font-bold m-0">Wishlist</p>

                    {totalWishlistQuantity > 0 ? (
                      <div
                        className={`absolute w-5 h-5 text-center bg-blue-300 rounded-full -top-2 left-3 leading-5 font-bold ${wishlistAnimationClass}`}
                      >
                        {totalWishlistQuantity}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>

                <p className="text-white m-0 text-3xl">|</p>

                <Link to="/cart">
                  <div className="self-center text-white mx-2 relative cursor-pointer pt-2 flex justify-center gap-1">
                    <ShoppingCart size={30} />
                    <p className="font-bold m-0">Cart</p>

                    {totalQuantity > 0 ? (
                      <div
                        className={`absolute w-5 h-5 text-center bg-blue-300 rounded-full -top-1 left-3 leading-5 font-bold ${cartAnimationClass}`}
                      >
                        {totalQuantity}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;