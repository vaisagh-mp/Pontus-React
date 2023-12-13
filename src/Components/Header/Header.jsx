import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/Pontuslogo.png'
import './Header.css'



function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id='header' className={isScrolled ? 'header fixed-top sticked' : 'header fixed-top'}>
            <Navbar expand="lg" className='navbar'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Pontus logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto navlink">
                            <Nav.Link href="#case-study">Case study</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#about-us">About us</Nav.Link>
                            <Nav.Link href="#technology">Technology</Nav.Link>
                            <Nav.Link href="#our-team">Our team</Nav.Link>
                            <Nav.Link href="#">Blog</Nav.Link>
                            <Nav.Link href="#contact-us">Contact Us</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
