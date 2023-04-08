import React from "react";
function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-secondary" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">PaperSoLver</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control inputBox" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn btn-warning" type="submit">Search</button>
      </form>
      <ul className="navbar-nav ms-auto me-2">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li><a href="/login"><button className="btn btn-light ms-2 me-1 " type="submit"  >Login</button></a></li>
        <li><a href="/signup"><button className="btn btn-dark mx-1 " type="submit" src="/signup">Signup</button></a></li>
      </ul>
      
    </div>
  </div>
</nav>
    )
}
export default Navbar;