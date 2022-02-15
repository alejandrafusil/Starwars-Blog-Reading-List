import React from "react";
import { Link } from "react-router-dom";
/* import images from "../../img"; */ 

export const Navbar = () => {
	return (
		<nav class="navbar navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/workspace/react-hello-webapp/src/img/Starwars_logo.png" alt="" width="30" height="24"/>
    </a>
  </div>
  <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle bg-primary text-ligth" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
</nav>
	);
};
