import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./routes/home/home.component";
import ImageHomeWrapper from "./components/image-home-wrapper/image-home-wrapper.component";
import Restaurants from "./routes/restaurants/restaurants.component";
import Cart from "./routes/cart/cart.component";
import Auth from "./routes/auth/auth.component";
import RestaurantDescription from "./routes/restaurant-description/restaurant-description.component";
import RestaurantMenu from './routes/restaurant-menu/restaurant-menu.component';
import RestaurantLocation from './routes/restaurant-location/restaurant-location.component';

function App() {
  return (
    <div className="app-contanier">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ImageHomeWrapper />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="krispy_foods" element={<RestaurantDescription />}>
            <Route path="menu" element={<RestaurantMenu />} />
            <Route path="location" element={<RestaurantLocation />} />
          </Route>
          <Route path="hot_box" element={<RestaurantDescription />}>
            <Route path="menu" element={<RestaurantMenu />} />
            <Route path="location" element={<RestaurantLocation />} />
          </Route>
          <Route path="auth" element={<Auth />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
