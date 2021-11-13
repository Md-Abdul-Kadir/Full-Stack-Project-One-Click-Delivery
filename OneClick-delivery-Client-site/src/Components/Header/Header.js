import React from 'react';
import { Container, Form, FormControl, Nav, Navbar ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logomotion.png';

const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
        <Navbar.Brand href="home" className="fs-4 logo my-auto pt-2"><img height="45px" className="pb-2 pe-2" src={logo} alt="" />OneClick <span className="text-danger">Delivery</span> </Navbar.Brand>
            <Nav className="ms-auto"> 
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/foods">Foods</Nav.Link>
            <Nav.Link as={Link} to="/drinks">Drinks</Nav.Link>
            <Nav.Link as={Link} to="/setmenu">Set-Menu</Nav.Link>         
            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/hotline">Hot Line</Nav.Link>
            <Form className="d-flex">
                  
                <Link to="/login"><Button className="px-3 mx-3" variant="light">Login</Button></Link>            
                
                <Link to="/signin"><Button className="px-3" variant="outline-light">Sign-in</Button></Link>
                
            </Form>
            </Nav>
            </Container>
        </Navbar>
        
        </>
    );
};

export default Header;