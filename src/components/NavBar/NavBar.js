import CardWidget from "../CardWidget/CardWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="button is-primary">
        <h3>SC</h3>
      </Link>
      <div>
        <NavLink
          to={"/category/carteras"}
          classN="button is-primary"
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Carteras
        </NavLink>
        <NavLink
          to={"/category/mochilas"}
          class="button is-primary"
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Mochilas
        </NavLink>
        <NavLink
          to={"/category/riñoneras"}
          class="button is-primary"
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Riñoneras
        </NavLink>
        <NavLink
          to={"/category/billeteras"}
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
