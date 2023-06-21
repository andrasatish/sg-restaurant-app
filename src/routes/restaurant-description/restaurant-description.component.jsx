import { Outlet, useNavigate } from "react-router";
import "./restaurant-description.component.css";
import { useContext } from "react";
import { RestaurantHolderContext } from "../../contexts/restaurant-holder.context";

const RestaurantDescription = () => {
  const navigate = useNavigate();
  const { selectedRestaurant } = useContext(RestaurantHolderContext)

  const navigateToRoute = (route) => {
    navigate(`${route}`);
  };

  return (
    <div className="rest-desc-container">
      {selectedRestaurant && (
        <div className="rest-desc-details">
          <h2 className="rest-desc-title">{selectedRestaurant.name}</h2>
          <div className="rest-desc-buttons">
            <span
              className="rest-desc-btn"
              style={{ marginRight: "10px" }}
              onClick={() => {
                navigateToRoute("menu");
              }}
            >
              Menu
            </span>{" "}
            |
            <span
              className="rest-desc-btn"
              style={{ marginLeft: "10px" }}
              onClick={() => {
                navigateToRoute("location");
              }}
            >
              Location
            </span>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default RestaurantDescription;
