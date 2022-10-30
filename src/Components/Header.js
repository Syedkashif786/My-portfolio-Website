import React from 'react';
import {NavLink} from "react-router-dom" ;

const Header = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-black">
  {/* <!-- Container wrapper --> */}
  <div class="container-fluid">
    {/* <!-- Toggle button --> */}
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <!-- Navbar brand --> */}
       <NavLink class="navbar-brand mt-2 mt-lg-0" href="#">
       <img
          src="https://cdn.iconscout.com/icon/free/png-256/user-avatar-contact-portfolio-personal-portrait-profile-1-5182.png"
          height="27"
          alt="Portfolio Logo"
          loading="lazy"
        />
      </NavLink >
      {/* <!-- Left links --> */}
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ps-3">
          <NavLink className = "nav-link" to = "/">Home</NavLink>
        </li>

        <li class="nav-item">
          <NavLink className = "nav-link" to = "/about">About</NavLink>
        </li>

        <li class="nav-item">
          <NavLink className = "nav-link" to = "/projects">Projects</NavLink>
        </li>
      </ul>
      
    </div>
    
    <div class="d-flex align-items-center">
      {/* <!-- Avatar --> */}
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="myprofilelogo.png"
            class="rounded-circle"
            height="27"
            alt="Green Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class = "dropdown-item" href = "http://localhost:3000/about">Resume</a>
          </li>
          <li>
            <a class="dropdown-item" href = "http://localhost:3000/projects">My Projects</a>
          </li>
          <li>
            <a class="dropdown-item" href = "http://localhost:3000/">Home</a>
          </li>
        </ul>
      </div>
    </div>
    {/* <!-- Right elements --> */}
  </div>
  {/* <!-- Container wrapper --> */}
</nav>

  )
}

export default Header;