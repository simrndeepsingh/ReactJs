import React from 'react'
import List from '../List/List';
import {Link} from 'react-router-dom';
import './Navbar.scss';
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-default-blue container">
    <div className="container-fluid">
        <Link className="navbar-brand text-decoration-none text-white" to="/">Axeno</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
            <List classStyle="nav-item">
            <Link className="nav-link active px-4 text-white text-decoration-none" aria-current="page" to="/">Home</Link>
            </List>
            <List classStyle="nav-item">
            <Link className="nav-link px-4 text-white text-decoration-none text-uppercase" to="/">Shop</Link>
            </List>
            <List classStyle="nav-item">
            <Link className="nav-link px-4 text-white text-decoration-none text-uppercase" to="/">Portfolio</Link>
            </List>
            <List classStyle="nav-item">
            <Link className="nav-link px-4 text-white text-decoration-none text-uppercase" to="/">Page</Link>
            </List>
            <List classStyle="nav-item">
            <Link className="nav-link px-4 text-white text-decoration-none text-uppercase" to="/">Blog</Link>
            </List>
            <List classStyle="nav-item">
            <Link className="nav-link px-4 text-white text-decoration-none text-uppercase" to="/">Elements</Link>
            </List>
        </ul>
        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        <List classStyle="nav-item">
            <Link className="nav-link px-4 text-white text-decoration-none text-uppercase" to="/">Login</Link>
            </List>
            <List classStyle="nav-item">
            <Link className="nav-link px-4 text-white text-decoration-none text-uppercase" to="/">Signup</Link>
            </List>
        </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar;