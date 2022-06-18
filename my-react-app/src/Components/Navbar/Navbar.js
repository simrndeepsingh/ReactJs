import React from 'react'
import List from '../List/List';
import './Navbar.scss';
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-default-blue container">
    <div className="container-fluid">
        <a className="navbar-brand text-decoration-none text-white" href="/">Axeno</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
            <List classStyle="nav-item">
            <a className="nav-link active px-4 text-white text-decoration-none" aria-current="page" href="#">Home</a>
            </List>
            <List classStyle="nav-item">
            <a className="nav-link px-4 text-white text-decoration-none text-uppercase" href="#">Shop</a>
            </List>
            <List classStyle="nav-item">
            <a className="nav-link px-4 text-white text-decoration-none text-uppercase" href="#">Portfolio</a>
            </List>
            <List classStyle="nav-item">
            <a className="nav-link px-4 text-white text-decoration-none text-uppercase" href="#">Page</a>
            </List>
            <List classStyle="nav-item">
            <a className="nav-link px-4 text-white text-decoration-none text-uppercase" href="#">Blog</a>
            </List>
            <List classStyle="nav-item">
            <a className="nav-link px-4 text-white text-decoration-none text-uppercase" href="#">Elements</a>
            </List>
        </ul>
        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        <List classStyle="nav-item">
            <a className="nav-link px-4 text-white text-decoration-none text-uppercase" href="#">Login</a>
            </List>
            <List classStyle="nav-item">
            <a className="nav-link px-4 text-white text-decoration-none text-uppercase" href="#">Signup</a>
            </List>
        </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar;