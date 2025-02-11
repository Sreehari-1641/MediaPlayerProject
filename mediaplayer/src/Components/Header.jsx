import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
    <Navbar style={{zIndex:1}} className="bg-info sticky-top w-100">
    <Container>
    <Link to={"/"}style={{textDecoration:"none"}}>
      <Navbar.Brand href="#home" style={{color:"white",fontSize:"25px"}}>
        
        <i className="fa-solid fa-music me-4" style={{color:"danger"}}></i>
        Media Player
      </Navbar.Brand>
      </Link>
    </Container>
  </Navbar></div>
  )
}

export default Header