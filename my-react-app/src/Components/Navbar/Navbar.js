import React from 'react'
import List from '../List/List';
import './Navbar.scss';
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Simrndeep Singh</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <List classStyle="nav-item">
            <a className="nav-link active px-4" aria-current="page" href="#">Home</a>
            </List>
            <List classStyle="nav-item">
            <a className="nav-link px-4" href="#">About</a>
            </List>
            <List classStyle="nav-item">
            <a className="nav-link px-4" href="#">Contact</a>
            </List>
        </ul>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
</nav>
  )
}

export default Navbar;