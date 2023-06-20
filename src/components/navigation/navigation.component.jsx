import { Link } from "react-router-dom";
import "./navigation.component.css";

const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Link to={"/"} className="logo cursor-text-decoration">
          SG
        </Link>
      </div>
      <div className="menus-container">
        <Link
          className="menu-item-container cursor-text-decoration"
          to={"/restaurants"}
        >
          Restaurants
        </Link>
        <Link
          className="menu-item-container cursor-text-decoration"
          to={"/auth"}
        >
          SignIn
        </Link>
        <Link
          className="menu-item-container cursor-text-decoration"
          to={"/cart"}
        >
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
