import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const {user, logOut} = useAuth()
    return (
        <>
        <Navbar bg="success" variant="dark" sticky="top"  collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand>Car Mechanic</Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end " >          
              <Nav.Link as={HashLink} className="text-light" to="/home#home">Home</Nav.Link>
              <Nav.Link as={HashLink} className="text-light" to="/home#services">Services</Nav.Link>
              <Nav.Link as={HashLink} className="text-light" to="/home#experts">Experts</Nav.Link>
              { user?.email ?
                <Button onClick={logOut} variant="light">LogOut</Button> :
                <Nav.Link as={Link} className="text-light" to="/login">Login</Nav.Link>
              }
              <Navbar.Text className="text-light">
                  Signed in as: <a href="#login">{user?.displayName }</a>
              </Navbar.Text>
            </Navbar.Collapse>
          
          </Container>
        </Navbar>
      </>
    )
};

export default Header;