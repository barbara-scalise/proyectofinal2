import CardWidget from "../CardWidget/CardWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" class="button is-primary">
        <h3>Ecomm</h3>
      </Link>
      <div>
        <NavLink
          to={"/category/juguetes"}
          class="button is-primary"
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Carteras
        </NavLink>
        <NavLink
          to={"/category/vinchas"}
          class="button is-primary"
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Mochilas
        </NavLink>
        <NavLink
          to={"/category/decoracion"}
          class="button is-primary"
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Riñoneras
        </NavLink>
        <NavLink
          to={"/category/decoracion"}
          class="button is-primary"
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Billeteras
        </NavLink>
      </div>
      <CardWidget />
    </nav>
  );
};

export default NavBar;
