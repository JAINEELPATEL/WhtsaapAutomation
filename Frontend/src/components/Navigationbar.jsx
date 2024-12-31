import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { TbDashboard } from "react-icons/tb";
import { MdOutlinePhone } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import '../styles/Navigationbar.css';

const Navigationbar = () => {
return (
/*<Navbar id="main-navbar" bg="light" expand="lg">
<Container>
<Navbar.Brand id="navbar-brand" as={Link} to="/">Your App Name</Navbar.Brand>
<Navbar.Toggle id="navbar-toggle" aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="navbar-collapse">
<Nav id="navbar-nav" className="ml-auto">
<Nav.Link id="nav-link-home" as={Link} to="/">Home</Nav.Link>
<Nav.Link id="nav-link-login" as={Link} to="/login">Login</Nav.Link>
<Nav.Link id="nav-link-dashboard" as={Link} to="/dashboard">Dashboard</Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>*/
<div className='Nav-cont'>
<div className='Logo-cont'>
<Link to="/" id='logodir'><h3>TetraThread</h3></Link>
</div>
<div className='mid-info-cont'>
<ul className='info-list'>
<li><Link to="/" className="nav-link"><GoHome />Home</Link></li>
<li><Link to="/dashboard" className="nav-link"><TbDashboard />Dashboard</Link></li>
<li><Link to="/about" className="nav-link">About</Link></li>
<li><Link to="/contact" className="nav-link"><MdOutlinePhone />Contact</Link></li>
</ul>
</div>
<div className='end-login-cont'>
<div><Link to="/login" className="nav-link-1" id='btnid1'><button>Login</button></Link></div>
<div><Link to="/profile" className="nav-link-1" id='btnid2'><button><FaUserCircle /> Profile</button></Link></div>
</div>
</div>

);
};

export default Navigationbar;


