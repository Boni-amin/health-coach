import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../image/logo.png'
import './Header.css'

const Header = () => {
    return (
        <>
        <Navbar className="header py-3" variant="dark" sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home"><span className="header-logo">Home</span></Nav.Link>
                    <Nav.Link as={HashLink} to="/services"><span className="header-logo">Services</span></Nav.Link>
                    <Nav.Link as={HashLink} to="/aboutus"><span className="header-logo">About Us</span></Nav.Link>
                    {/* {user?.email ?
                        <Button onClick={logOut} variant="light">Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>} */}
                    {/* <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;