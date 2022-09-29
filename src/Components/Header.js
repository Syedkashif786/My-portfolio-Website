import React from 'react';
import {NavLink} from "react-router-dom" ;

const Header = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
          src="portfoliologo.png"
          height="50"
          alt="Portfolio Logo"
          loading="lazy"
        />
      </NavLink >
      {/* <!-- Left links --> */}
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className = "nav-link" to = "/home">Home</NavLink>
        </li>

        <li class="nav-item">
          <NavLink className = "nav-link" to = "/about">About</NavLink>
        </li>

        <li class="nav-item">
          <NavLink className = "nav-link" to = "/projects">Projects</NavLink>
        </li>
      </ul>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}

    {/* <!-- Right elements --> */}
    <div class="d-flex align-items-center">
      {/* <!-- Icon --> */}
      {/* <NavLink class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </NavLink> */}

      {/* <!-- Notifications --> */}
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
           <i class="fas fa-bell   " ></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
      </div>
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
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class = "dropdown-item" href = "#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href = "#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href = "#">Logout</a>
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