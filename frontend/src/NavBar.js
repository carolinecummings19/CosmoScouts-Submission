import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from './astronaut_logo.png';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <Navbar.Brand as={NavLink} to="/"> 
        <img src={logo} className="App-logo" alt="logo" 
          width="50"
          height="50"
        /> CosmoScouts </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/weatherforecast" className={styles.navLink}>
              Sky Gazing?
            </Nav.Link>
            <Nav.Link as={NavLink} to="/ConstellationFinder" className={styles.navLink}>
              Constellations
            </Nav.Link>
            <Nav.Link as={NavLink} to="/nasaapod" className={styles.navLink}>
              Nasa APOD
            </Nav.Link>
            <Nav.Link as={NavLink} to="/quiz" className={styles.navLink}>
              Learning
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={styles.navLink}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;